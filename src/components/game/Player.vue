<script setup lang="ts">
import PlayerToRight from "../../assets/img/right.png";
import PlayerToRightMove from "../../assets/img/right-move.png";
import PlayerToLeft from "../../assets/img/left.png";
import PlayerToLeftMove from "../../assets/img/left-move.png";
import PlayerToUp from "../../assets/img/top.png";
import PlayerToUpMove from "../../assets/img/top-move.png";
import PlayerToDown from "../../assets/img/down.png";
import PlayerToDownMove from "../../assets/img/down-move.png";

import { onMounted, onUnmounted, ref } from "vue";
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

const currentPlayerImage = ref(PlayerToRight);
const defaultPlayerImage = ref(PlayerToRight);
const isKeyDown = ref(false);
function useMove() {
  function handleKeyUp(e: KeyboardEvent) {
    if (props.id === 0) {
      switch (e.code) {
        case "ArrowLeft":
          movePlayerToLeft(props.id);
          break;
        case "ArrowRight":
          movePlayerToRight(props.id);
          handleKeyDown(e);
          break;
        case "ArrowUp":
          movePlayerToUp(props.id);
          break;
        case "ArrowDown":
          movePlayerToDown(props.id);
          break;
      }
      isKeyDown.value = false;
      currentPlayerImage.value = defaultPlayerImage.value;
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (props.id === 0 && !isKeyDown.value) {
      isKeyDown.value = true;

      switch (e.code) {
        case "ArrowLeft":
          defaultPlayerImage.value = PlayerToLeft;
          currentPlayerImage.value = isKeyDown.value
            ? PlayerToLeftMove
            : PlayerToLeft;

          break;
        case "ArrowRight":
          defaultPlayerImage.value = PlayerToRight;
          currentPlayerImage.value = isKeyDown.value
            ? PlayerToRightMove
            : PlayerToRight;

          break;
        case "ArrowUp":
          defaultPlayerImage.value = PlayerToUp;
          currentPlayerImage.value = isKeyDown.value
            ? PlayerToUpMove
            : PlayerToUp;

          break;
        case "ArrowDown":
          defaultPlayerImage.value = PlayerToDown;
          currentPlayerImage.value = isKeyDown.value
            ? PlayerToDownMove
            : PlayerToDown;

          break;
      }
    }
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);
  });
  onUnmounted(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.removeEventListener("keydown", handleKeyDown);
  });
}
useMove();
</script>
<template>
  <div class="player" :style="position">
    <template v-if="props.id === 0">
      <img :src="currentPlayerImage" />
    </template>
  </div>
</template>
<style scoped lang="less">
.player {
  position: absolute;
  width: 32px;
  height: 32px;
  img {
    image-rendering: pixelated;
  }
}
</style>
