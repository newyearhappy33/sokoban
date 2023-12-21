<script setup lang="ts">
import router from "../../router/router";

const onClickButton = (e: MouseEvent) => {
  e.preventDefault();
  if (e.target instanceof HTMLElement) {
    const target = e.target.innerText;
    switch (target) {
      case "开始游戏":
        updateView("Game");
        break;
      case "绘制地图":
        updateView("Draw");
        break;
      case "关于&":
        updateView("About");
        break;
      default:
        break;
    }
  }
};
const updateView = (view: "Game" | "Draw" | "About") => {
  router.push({ name: view });
};
</script>
<template>
  <div class="player">
    <div class="top">
      <span class="nes-text is-error title">Sokoban</span>
      <div class="cartoon">
        <i class="nes-ash play"></i>
        <img src="../../assets/cargo_on_target.png" />
      </div>
    </div>
    <button
      type="button"
      class="nes-btn is-primary game"
      @click="onClickButton"
    >
      开始游戏
    </button>
    <button type="button" class="nes-btn is-success map" @click="onClickButton">
      绘制地图
    </button>
    <button
      type="button"
      class="nes-btn is-warning about"
      @click="onClickButton"
    >
      关于&
    </button>
  </div>
</template>
<style scoped lang="less">
.player {
  display: flex;
  flex-direction: column;
  width: 520px;
  .top {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-bottom: 2px solid #212529;
    width: 100%;
    .title {
      margin: auto;
      font-size: 70px;
      font-weight: bold;
    }
    .cartoon {
      display: flex;
      align-items: flex-end;
      animation: play 9s ease-in-out infinite;
      margin-top: 20px;
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
button {
  margin: 10px;
  width: 500px;
}

@keyframes play {
  0%,
  100% {
    transform: translateX(0);
  }
  99.9% {
    transform: translateX((520px - 154px));
  }
}
</style>
