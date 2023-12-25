<script setup lang="ts">
import { computed, ref } from "vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
import { useMapStore } from "../../store/map";
import { usePlayerStore } from "../../store/player";
import { useCount } from "../../store/count";
import { gameObserver } from "../../composables/gameOver";

const { map, cargosToEnd } = useMapStore();
const { cargos } = useCargoStore();
const { player, initPlayer } = usePlayerStore();
const { updataCount } = useCount();
const mapWidth = computed(() => map[0].length * 64 + "px");

const status = ref<boolean>(false);

const onNextGame = () => {
  status.value = false;
  initPlayer();
};

// 通过订阅游戏结束的事件，来判断游戏是否结束
gameObserver.subscribe(() => {
  if (cargosToEnd(cargos)) {
    updataCount();
    setTimeout(() => {
      status.value = true;
    }, 500);
  }
});
</script>
<template>
  <div class="main" :style="{ width: mapWidth }">
    <Map />
    <template v-for="play in player" :key="player.id">
      <Player :id="play.id" :x="play.x" :y="play.y" />
    </template>
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :id="cargo.id" :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
  <button v-if="status" @click="onNextGame">下一关</button>
</template>
<style scoped>
.main {
  position: relative;
  margin: 0 50px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 9px #c4c4c4;
}
</style>
