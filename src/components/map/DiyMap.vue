<script setup lang="ts">
import MapUtils from "./mapUtils.vue";
import { useDiyMapStore } from "../../store/diyMap";
const { mapConfig, setupMap } = useDiyMapStore();
</script>
<template>
  <div>
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
</style>
