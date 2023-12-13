<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Player from "../../assets/keeper.png";
import Player1 from "../../assets/keeper1.png";
import { usePlayerStore } from "../../store/player";
import { usePosition } from "../../composables/usePosition";

interface Props {
  id: number;
  x: number;
  y: number;
}
const props = defineProps<Props>();
const { position } = usePosition([props]);
const {
  movePlayerToUp,
  movePlayerToDown,
  movePlayerToLeft,
  movePlayerToRight,
} = usePlayerStore();

useMove();
function useMove() {
  function handleKeyUp(e: KeyboardEvent) {
    if (props.id === 0) {
      switch (e.code) {
        case "ArrowLeft":
          movePlayerToLeft(props.id);
          break;
        case "ArrowRight":
          movePlayerToRight(props.id);
          break;
        case "ArrowUp":
          movePlayerToUp(props.id);
          break;
        case "ArrowDown":
          movePlayerToDown(props.id);
          break;
      }
    } else if (props.id === 1) {
      switch (e.code) {
        case "KeyA":
          movePlayerToLeft(props.id);
          break;
        case "KeyD":
          movePlayerToRight(props.id);
          break;
        case "KeyW":
          movePlayerToUp(props.id);
          break;
        case "KeyS":
          movePlayerToDown(props.id);
          break;
      }
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
  {{ position }}
  <div class="player" :style="position">
    <template v-if="props.id === 0">
      <img :src="Player" class="" />
    </template>
    <template v-if="props.id === 1">
      <img :src="Player1" class="" />
    </template>
  </div>
</template>
<style>
.player {
  position: absolute;
  width: 32px;
  height: 32px;
}
</style>
