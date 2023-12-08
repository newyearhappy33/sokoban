<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import { useCargoStore } from "../../store/cargo";
const { cargos } = useCargoStore();
</script>
<template>
  <div class="main">
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
  width: auto;
  height: auto;
}
</style>
