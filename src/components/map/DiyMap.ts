import { useDiyMapStore } from "../../store/diyMap";

export function useDragstart(el: HTMLDivElement) {
  const { updataMap } = useDiyMapStore();
  let source: HTMLElement | null = null;
  if (!el) return;

  // 拖动时处罚
  el.ondragstart = (e: any) => {
    e.dataTransfer!.effectAllowed = e.target.dataset.effect;
    source = e.target as HTMLElement;
  };

  // 拖动结束时触发
  el.ondragover = (e: DragEvent) => {
    e.preventDefault();
  };

  // 当元素或选中的文本在可释放目标上被释放时触发
  el.ondrop = (e: DragEvent) => {
    // 被拖动元素
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

// 获取拖动元素
function getDropNode(e: HTMLElement | null): HTMLElement | null {
  while (e) {
    if (e.dataset && e.dataset.drop) {
      return e;
    }
    e = e.parentNode as HTMLElement;
  }
  return null;
}
