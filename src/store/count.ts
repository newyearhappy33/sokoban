import { defineStore } from "pinia";
import { ref } from "vue";

export const useCount = defineStore("counts", () => {
  let count = ref<number>(Number(localStorage.getItem("count")) || 0);

  function updataCount() {
    count.value += 1;
    saveCount();
  }
  function saveCount() {
    localStorage.setItem("count", count.value.toString());
  }
  return { count, updataCount, saveCount };
});
