<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
import { useMapStore } from "../../store/map";
import { computed } from "vue";
import { usePlayerStore } from "../../store/player";
const { map } = useMapStore();
const { cargos } = useCargoStore();
const { player } = usePlayerStore();
const mapWidth = computed(() => map[0].length * 32 + "px");
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
}
</style>
