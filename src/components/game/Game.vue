<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
import { useMapStore } from "../../store/map";
import { computed } from "vue";
import { usePlayerStore } from "../../store/player";
import { gameObserver } from "../../composables/gameOver";
const { map, cargosToEnd } = useMapStore();
const { cargos } = useCargoStore();
const { player } = usePlayerStore();
const mapWidth = computed(() => map[0].length * 64 + "px");

// 通过订阅游戏结束的事件，来判断游戏是否结束
gameObserver.subscribe(() => {
  if (cargosToEnd(cargos)) {
    setTimeout(() => {
      alert("Game Over");
      location.reload();
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
</template>
<style scoped>
.main {
  position: relative;
  margin: 0 50px;
  overflow: hidden;
  border-radius: 10px;
}
</style>
