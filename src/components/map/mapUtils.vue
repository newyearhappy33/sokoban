<script setup lang="ts"></script>
<template>
  <div class="utils">
    <div data-drop="copy" draggable="true" class="wall"></div>
    <div data-drop="copy" draggable="true" class="cargo"></div>
    <div data-drop="copy" draggable="true" class="floor"></div>
    <div data-drop="copy" draggable="true" class="end"></div>
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
  width: 70px;
  height: 70px;
  background: url(../../assets/wall.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.cargo {
  width: 70px;
  height: 70px;
  background: url(../../assets/cargo.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.floor {
  width: 70px;
  height: 70px;
  background: url(../../assets/floor.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.end {
  width: 70px;
  height: 70px;
  background: url(../../assets/target.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
</style>
