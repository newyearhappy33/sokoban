<script setup lang="ts"></script>
<template>
  <div class="utils" data-drop="move">
    <div data-effect="copy" draggable="true" class="wall"></div>
    <div data-effect="copy" draggable="true" class="cargo"></div>
    <div data-effect="copy" draggable="true" class="floor"></div>
    <div data-effect="copy" draggable="true" class="end"></div>
  </div>
</template>
<style scoped>
.utils {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15px;
}
.wall {
  width: 60px;
  height: 60px;
  background: url(../../assets/wall.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.cargo {
  width: 60px;
  height: 60px;
  background: url(../../assets/cargo.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.floor {
  width: 60px;
  height: 60px;
  background: url(../../assets/floor.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.end {
  width: 60px;
  height: 60px;
  background: url(../../assets/target.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
</style>
