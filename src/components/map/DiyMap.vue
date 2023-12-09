<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
import { onMounted } from "vue";
const { mapConfig, setupMap } = useDiyMapStore();

let container: HTMLElement | null = null;

onMounted(() => {
  useDragstart(container as HTMLDivElement);
});

const useDragstart = (el: HTMLDivElement) => {
  el.ondragstart = (e: DragEvent) => {
    e.dataTransfer!.effectAllowed = "copy";
  };
  el.ondragover = (e: DragEvent) => {
    (e.target as HTMLElement).classList.remove("dragover");
  };
  el.ondragenter = (e: DragEvent) => {
    (e.target as HTMLElement).classList.add("dragover");
  };
  el.ondrop = (e: DragEvent) => {};
};
</script>
<template>
  <div ref="container">
    <div v-for="(row, i) in mapConfig" :key="i" class="flex">
      <div v-for="(cell, j) in row" :key="j" @click="setupMap({ x: i, y: j })">
        <!-- 根据 cell 的值渲染不同的内容 -->
        <template v-if="cell === 0">
          <div class="cell"></div>
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
