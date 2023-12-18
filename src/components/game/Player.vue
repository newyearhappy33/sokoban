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
const status = ref<boolean>(false);
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
    }
  }
  onMounted(() => {
    window.addEventListener("keyup", handleKeyUp);
  });
  onUnmounted(() => {
    window.addEventListener("keyup", handleKeyUp);
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
