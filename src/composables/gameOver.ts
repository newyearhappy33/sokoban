class GameObserver {
  private callbacks: (() => void)[] = [];

  subscribe(callback: () => void) {
    this.callbacks.push(callback);
  }

  notify() {
    this.callbacks.forEach((callback) => callback());
  }
}

export const gameObserver = new GameObserver();
