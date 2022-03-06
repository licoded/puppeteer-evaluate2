class Dom {
  elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  getText() {
    return this.elem?.innerText;
  }
}

function parseNodeList(elemArr: NodeListOf<Element> | null): HTMLElement[] {
  if (elemArr === null) return [];
  return [...elemArr] as HTMLElement[];
}

export const $e = function (selector: string) {
  const elem = document.querySelector(selector) as HTMLElement;
  return new Dom(elem);
}

export const $$e = function (selector: string) {
  const elemArr = parseNodeList(document.querySelectorAll(selector));
  return elemArr.map((elem) => new Dom(elem));
}