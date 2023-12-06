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
  <div class="absolute" :style="position">
    <img :src="cargoImg" />
  </div>
</template>
<style scoped></style>
