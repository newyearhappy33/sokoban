<script setup lang="ts">
import Play from "./views/PlayerView/PlayerView.vue";
import Game from "./views/GameView/GameView.vue";
import Draw from "./views/DrawView/DrawView.vue";

import { ref } from "vue";
const currentView = ref("Play");

const updateView = (view: string) => {
  currentView.value = view;
};
</script>

<template>
  <div class="content">
    <!-- <RouterView /> -->
    <Play v-if="currentView === 'Play'" @onChangeView="updateView" />
    <Game v-if="currentView === 'Game'" />
    <Draw v-if="currentView === 'Draw'" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: #f2f2f2;
}
</style>
