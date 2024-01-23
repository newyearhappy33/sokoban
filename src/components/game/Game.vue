<script setup lang="ts">
import { computed, ref } from "vue";
import Map from "./Map.vue";
import Cargo from "./Cargo.vue";
import Player from "./Player.vue";
import { useCount } from "../../store/count";
import { useMapStore } from "../../store/map";
import { useNextMap } from "../../store/nextMap";
import { useNextCargo} from "../../store/nextCargo"
import { useCargoStore } from "../../store/cargo";
import { usePlayerStore } from "../../store/player";
import { gameObserver } from "../../composables/gameOver";

const { nextMap } = useNextMap();
const { nextCargo} = useNextCargo()
const { updataCount } = useCount();
const { cargos } = useCargoStore();
const { map, cargosToEnd } = useMapStore();
const { player, initPlayer } = usePlayerStore();
const mapWidth = computed(() => map[0].length * 64 + "px");

const status = ref<boolean>(false);
const index = ref<number>(0);
const onNextGame = () => {
  status.value = false;
  initPlayer(); // 初始化人物
  if (index.value >= 2) {
    return alert("你已通关~");
  } else {
    index.value += 1;
    nextMap(index.value);
    nextCargo(index.value)
  }
};

// 订阅游戏结束的事件
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
