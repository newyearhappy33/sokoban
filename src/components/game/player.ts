import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToUp,
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
  } = usePlayerStore();
  window.addEventListener("keyup", (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
    }
  });
}
