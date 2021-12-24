import { treeMain, treeMainContainer, audioButton, audio, snowWrapper, snowButton } from "./storage";

export function chooseTree(e: Event) {
  const target = e.target as HTMLTemplateElement;
  const elem = treeMain as HTMLImageElement;
  if (target.classList.contains('tree-item')) {
    elem.src = `../assets/tree/${target.dataset.tr}.png`;
  }  
}



export function handleAudio() {
  if (!audioButton.classList.contains('active')) {
    audioButton.classList.add('active');
    audio.currentTime = 0;
    audio.play();
  } else {
    audioButton.classList.remove('active');
    audio.pause();
  }
}

export function handleSnow() {
  if (!snowButton.classList.contains('active')) {
    snowButton.classList.add('active');
    snowWrapper.classList.remove('hide');
  } else {
    snowButton.classList.remove('active');
    snowWrapper.classList.add('hide');
  }
}

export function chooseBackground(e: Event) {
  const target = e.target as HTMLTemplateElement;
  const elem = treeMainContainer as HTMLElement;
  if (target.classList.contains('bg')) {
    elem.style.backgroundImage = `url('../assets/bg/${target.dataset.back}.jpg'`;
  }  
}


  
