<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
import { onMounted } from "vue";
const { mapConfig, updataMap } = useDiyMapStore();

let container: HTMLElement | null = null;

onMounted(() => {
  useDragstart(container as HTMLDivElement);
});

let source: HTMLElement | null = null;
const useDragstart = (el: HTMLDivElement) => {
  if (!el) return;

  el.ondragstart = (e: any) => {
    e.dataTransfer!.effectAllowed = e.target.dataset.effect;
    source = e.target as HTMLElement;
  };

  el.ondragover = (e: DragEvent) => {
    e.preventDefault();
  };

  el.ondrop = (e: DragEvent) => {
    const dropNode = getDropNode(e.target as HTMLElement);

    if (dropNode && dropNode.dataset.drop === e.dataTransfer!.effectAllowed) {
      if (dropNode.dataset.drop === "copy") {
        dropNode.innerHTML = "";

        const clonedNode = source!.cloneNode(true) as HTMLElement;
        clonedNode.dataset.effect = "move";

        dropNode.appendChild(clonedNode);

        //TODO：这里需要一个函数用来做拖动元素的事件，用来处理拖动的是哪一个元素，并且放置在了那个位置
        // 元素ID： dropNode.dataset.id
        // source 是拖动的元素

        // const moveNode = setMapPosition(source!, e);

        updataMap(source!, dropNode.dataset.id);
      } else {
        source!.remove();
      }
    }
  };
};

function getDropNode(e: HTMLElement | null): HTMLElement | null {
  while (e) {
    if (e.dataset && e.dataset.drop) {
      return e;
    }
    e = e.parentNode as HTMLElement;
  }
  return null;
}
</script>
<template>
  <div ref="container">
    <div v-for="(row, i) in mapConfig" :key="i" class="flex">
      <div v-for="(cell, j) in row" :key="j">
        <div data-drop="copy" class="cell" :data-id="cell"></div>
      </div>
    </div>
    <MapUtils />
  </div>
</template>
<style scoped>
.flex {
  display: flex;
}
.cell {
  border: 1px solid black;
  width: 60px;
  height: 60px;
  background-color: #ebebeb;
}
.dragover {
  background-color: #f0e3b7;
}
</style>
