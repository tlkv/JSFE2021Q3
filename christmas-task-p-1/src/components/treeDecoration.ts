import { treeMain, treeMainContainer } from "./storage";

export function chooseTree(e: Event) {
  const target = e.target as HTMLTemplateElement;
  const elem = treeMain as HTMLImageElement;
  if (target.classList.contains('tree-item')) {
    elem.src = `../assets/tree/${target.dataset.tr}.png`;
  }  
}

export function chooseBackground(e: Event) {
  const target = e.target as HTMLTemplateElement;
  const elem = treeMainContainer as HTMLElement;
  if (target.classList.contains('bg')) {
    elem.style.backgroundImage = `url('../assets/bg/${target.dataset.back}.jpg'`;
  }  
}
