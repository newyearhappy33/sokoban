<script setup lang="ts">
import cargoImg from "../../assets/img/cargo.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  id: number;
  x: number;
  y: number;
}
const props = defineProps<Props>();
const { position } = usePosition([props]);
</script>
<template>
  <div>
    <div class="cargo" :style="position">
      <img :src="cargoImg" />
    </div>
  </div>
</template>
<style scoped>
.cargo {
  position: absolute;
  width: 64px;
  height: 64px;
}
</style>
