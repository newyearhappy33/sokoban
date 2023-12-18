<script setup lang="ts">
import Game from "../../components/game/Game.vue";
</script>
<template>
  <div class="game">
    <div class="score">
      <span class="nes-text is-success" style="font-size: 30px"
        >Warning:100分</span
      >
    </div>
    <Game />
    <i class="nes-icon close goBack"></i>
  </div>
</template>
<style scoped lang="less">
.game {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
}
.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 2rem;
  span {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
.goBack {
  margin-left: 50px;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
}
</style>
