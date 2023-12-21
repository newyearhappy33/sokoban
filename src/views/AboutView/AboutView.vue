<script setup lang="ts">
import router from "../../router/router.ts";
const onClickBack = () => {
  router.push({ name: "Player" });
};
</script>
<template>
  <div>
    <div class="nes-container is-dark with-title">
      <p class="title">关于&</p>
      <p>一个简单的推箱子游戏，可以实现双人和单人推箱子(双人逻辑已移除)</p>
      <hr />
      <p>基于:</p>
      <i>Vue3，TypeScript，NES.css，Pinia</i>
    </div>
    <i class="nes-icon close goBack" @click="onClickBack"></i>
  </div>
</template>
<style scoped lang="less">
.goBack {
  margin-left: 50px;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
}
</style>
