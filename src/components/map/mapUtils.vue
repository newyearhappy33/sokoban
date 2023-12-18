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
  width: 64px;
  height: 64px;
  background: url(../../assets/img/wall.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.cargo {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/cargo.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.floor {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/floor2.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
.end {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/end2.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
}
</style>
