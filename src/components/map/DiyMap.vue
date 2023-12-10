<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
import { onMounted } from "vue";
import { useDragstart } from "./DiyMap";
const { mapConfig, saveMap } = useDiyMapStore();

let container: HTMLElement | null = null;

onMounted(() => {
  useDragstart(container as HTMLDivElement);
});

const clickOnSave = () => {
  saveMap();
  // if (!isSpecialArray()) {
  //   console.log("地图四周必须是墙壁！");
  //   return;
  // } else {
  //   console.log("保存成功！");
  // }
};
</script>
<template>
  <div ref="container">
    <div v-for="(row, i) in mapConfig" :key="i" class="flex">
      <div v-for="(cell, j) in row" :key="j">
        <div data-drop="copy" class="cell" :data-id="cell"></div>
      </div>
    </div>
    <MapUtils />
    <button @click="clickOnSave">clickOnSave</button>
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
