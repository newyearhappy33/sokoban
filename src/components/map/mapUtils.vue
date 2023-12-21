<script setup lang="ts"></script>
<template>
  <div class="utils" data-drop="move">
    <div class="utils">
      <div data-effect="copy" draggable="true" class="wall"></div>
      <span>墙面</span>
    </div>
    <div class="utils">
      <div data-effect="copy" draggable="true" class="cargo"></div>
      <span>箱子</span>
    </div>
    <div class="utils">
      <div data-effect="copy" draggable="true" class="floor"></div>
      <span>地面</span>
    </div>
    <div class="utils">
      <div data-effect="copy" draggable="true" class="end"></div>
      <span>终点</span>
    </div>
  </div>
</template>
<style scoped>
.utils {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15px;
  color: rgb(46, 44, 46);
  font-weight: bold;
}
.wall {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/wall.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 15px 0px #8e8e8ea3;
}
.cargo {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/cargo.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 15px 0px #8e8e8ea3;
}
.floor {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/floor2.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 15px 0px #8e8e8ea3;
}
.end {
  width: 64px;
  height: 64px;
  background: url(../../assets/img/end2.png);
  background-size: contain;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 15px 0px #8e8e8ea3;
}

.text {
  text-align: center;
  font-size: 12px;
  color: #9d9fa0;
  font-weight: bold;
}
</style>
