<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
import { onMounted } from "vue";
const { mapConfig, setupMap } = useDiyMapStore();

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

  // el.ondragenter = (e: DragEvent) => {
  //   // clearDragover();
  //   // const Node = getDropNode(e.target as HTMLElement);
  //   // const dropNode = getDropNode(e.target as HTMLElement);
  //   // if (dropNode && dropNode.dataset.drop === e.dataTransfer!.effectAllowed) {
  //   //   dropNode.classList.add("dragover");
  //   // }
  // };

  el.ondrop = (e: DragEvent) => {
    // clearDragover();

    const dropNode = getDropNode(e.target as HTMLElement);

    if (dropNode && dropNode.dataset.drop === e.dataTransfer!.effectAllowed) {
      if (dropNode.dataset.drop === "copy") {
        dropNode.innerHTML = "";

        const clonedNode = source!.cloneNode(true) as HTMLElement;
        clonedNode.dataset.effect = "move";

        dropNode.appendChild(clonedNode);
      } else {
        source!.remove();
      }
    }
  };
};

// function clearDragover() {
//   document.querySelectorAll(".cell").forEach((node) => {
//     node.classList.remove("dragover");
//   });
// }

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
      <div v-for="(cell, j) in row" :key="j" @click="setupMap({ x: i, y: j })">
        <!-- 根据 cell 的值渲染不同的内容 -->
        <template v-if="cell === 0">
          <div data-drop="copy" class="cell"></div>
        </template>
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
