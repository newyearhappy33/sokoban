<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Player from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { usePosition } from "../../composables/usePosition";
// import { useMove } from "./player";

useMove();
const { player } = usePlayerStore();
const { position } = usePosition(player);

function useMove() {
  const {
    movePlayerToUp,
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
  } = usePlayerStore();

  function handleKeyUp(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
    }
  }
  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });
  onUnmounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });
}
</script>
<template>
  <div class="player" :style="position">
    <img :src="Player" class="" />
  </div>
</template>
<style>
.player {
  position: absolute;
  width: 32px;
  height: 32px;
}
</style>
