<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>();
const { position } = usePosition(props);
</script>
<template>
  <div class="cargo" :style="position">
    <img :src="cargoImg" />
  </div>
</template>
<style scoped>
.cargo {
  position: absolute;
  width: 32px;
  height: 32px;
}
</style>
