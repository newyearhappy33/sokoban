<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
import { useMapStore } from "../../store/map";
import { computed } from "vue";
const { map } = useMapStore();
const { cargos } = useCargoStore();
const mapWidth = computed(() => map[0].length * 32 + "px");
</script>
<template>
  <div class="main" :style="{ width: mapWidth }">
    <Map />
    <Player />
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>
<style scoped>
.main {
  position: relative;
}
</style>
