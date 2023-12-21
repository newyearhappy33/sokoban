<script setup lang="ts">
import DiyMap from "../../components/map/DiyMap.vue";
import router from "../../router/router";
const onClickBack = () => {
  router.push({ name: "Player" });
};
</script>
<template>
  <div>
    <DiyMap />
    <i class="nes-icon close goBack" @click="onClickBack"></i>
  </div>
</template>
<style scoped>
.goBack {
  margin-left: 50px;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
}
</style>
