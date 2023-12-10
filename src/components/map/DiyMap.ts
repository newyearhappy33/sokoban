import { useDiyMapStore } from "../../store/diyMap";

const { updataMap } = useDiyMapStore();
let source: HTMLElement | null = null;

export function useDragstart(el: HTMLDivElement) {
  if (!el) return;

  el.ondragstart = (e: any) => {
    e.dataTransfer!.effectAllowed = e.target.dataset.effect;
    source = e.target as HTMLElement;
  };

  el.ondragover = (e: DragEvent) => {
    e.preventDefault();
  };

  el.ondrop = (e: DragEvent) => {
    const dropNode = getDropNode(e.target as HTMLElement);

    if (dropNode && dropNode.dataset.drop === e.dataTransfer!.effectAllowed) {
      if (dropNode.dataset.drop === "copy") {
        dropNode.innerHTML = "";

        const clonedNode = source!.cloneNode(true) as HTMLElement;
        clonedNode.dataset.effect = "move";

        dropNode.appendChild(clonedNode);

        updataMap(source!, dropNode.dataset.id);
      } else {
        source!.remove();
      }
    }
  };
}

function getDropNode(e: HTMLElement | null): HTMLElement | null {
  while (e) {
    if (e.dataset && e.dataset.drop) {
      return e;
    }
    e = e.parentNode as HTMLElement;
  }
  return null;
}
