<script setup lang="ts">
import { watch } from "vue";
import Game from "../../components/game/Game.vue";
import router from "../../router/router";
import { useCount } from "../../store/count";

const onClickBack = () => {
  router.push({ name: "Player" });
};

const { count } = useCount();
let countEl: HTMLElement | null = null;
watch(
  () => useCount().count,
  (newVal) => {
    if (newVal && countEl) {
      countEl.classList.add("species");
      setTimeout(() => {
        countEl!.classList.remove("species");
      }, 1000);
    }
  }
);
</script>
<template>
  <div class="game">
    <div class="score">
      <i class="nes-icon coin is-large species" ref="countEl"></i>
      <div class="count">
        <i class="nes-icon close is-small"></i>
        <span>{{ count }}</span>
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
    animation: species 3s linear infinite;
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
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
