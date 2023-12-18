<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
import { onMounted } from "vue";
import { useDragstart } from "./DiyMap";
const { mapConfig, saveMap, isSpecialArray } = useDiyMapStore();

let container: HTMLElement | null = null;

onMounted(() => {
  useDragstart(container as HTMLDivElement);
});

const clickOnSave = () => {
  if (!isSpecialArray()) {
    console.log("地图四周必须是墙壁！");
    return;
  } else {
    saveMap();
    console.log("保存成功！");
  }
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
    <div class="nes-container is-dark with-title warning">
      <p class="title">warning</p>
      <p>· 绘制地图的时，四周必须为墙面</p>
      <p>· 绘制地图的时，请绘制'正常'类地图</p>
    </div>

    <button type="button" class="nes-btn saveClick" @click="clickOnSave">
      保存地图
    </button>
  </div>
</template>
<style scoped lang="less">
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

.saveClick {
}
.warning {
  margin-top: 20px !important;
}
</style>
