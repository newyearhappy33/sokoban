<script setup lang="ts">
import Game from "../../components/game/Game.vue";
import router from "../../router/router";

const onClickBack = () => {
  router.push({ name: "Player" });
};
</script>
<template>
  <div class="game">
    <div class="score">
      <i class="nes-icon coin is-large species"></i>
      <div class="count">
        <i class="nes-icon close is-small"></i>
        <span>0</span>
      </div>
    </div>
    <Game />
    <i class="nes-icon close goBack" @click="onClickBack"></i>
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
  .count {
    display: flex;
    align-items: center;
    margin-top: 10px;
    i {
      margin-right: 10px;
    }
    span {
      font-size: 30px;
      font-weight: 900;
    }
  }
  .species {
    // animation: species 1s infinite alternate;
  }
}
.goBack {
  margin-left: 50px;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
}

@keyframes species {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
