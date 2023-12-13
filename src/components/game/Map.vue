<script setup lang="ts">
import floorImg from "../../assets/floor.png";
import target from "../../assets/target.png";
import wall from "../../assets/wall.png";
import { useMapStore, MapTile } from "../../store/map";
const { map } = useMapStore();
</script>
<template>
  <div v-for="(_, i) in map" class="flex">
    <div v-for="(_, j) in map[i]">
      <template v-if="map[i][j] == MapTile.WALL">
        <img :src="wall" />
      </template>
      <template v-else-if="map[i][j] == MapTile.FLOOR">
        <img :src="floorImg" />
      </template>
      <template v-else-if="map[i][j] == MapTile.END">
        <img :src="target" />
      </template>
    </div>
  </div>
</template>
<style scoped>
.flex {
  display: flex;
  width: 32px;
  height: 32px;
}
</style>
