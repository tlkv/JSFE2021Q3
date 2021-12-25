import { treeMain, treeMainContainer, audioButton, audio, snowWrapper, snowButton, AppState } from './storage';
import { TreeKeys } from './interfaces';
import App from './app';

export function handleTreeFilters(e: Event) {
  const filterElement = e.target as HTMLElement;
  if (!filterElement.classList.contains('tree-filter-item')) {
    return false;
  }
  console.log(filterElement.dataset);
  const inputFilterKey = filterElement.dataset.group as TreeKeys;
  const inputFilterValue = filterElement.dataset.value as string;
  if (inputFilterKey === 'audio' || inputFilterKey === 'snow') {
    AppState[inputFilterKey] = !filterElement.classList.contains('active');
    //filterElement.classList.toggle('active');
  } else {
    AppState[inputFilterKey] = inputFilterValue;
  }

  renderTree();
  handleAudio();

  console.log(AppState);
}
//renderToys(filterToys());

/* const filterElement = e.target as HTMLElement;
  if (!filterElement.classList.contains('filter-item')) {
    return false;
  }
  const inputFilterGroup = filterElement.dataset.group as string;
  const inputFilterKey = inputFilterGroup as FilterKeys;
  const inputFilterValue = filterElement.dataset.value as string;
  if (inputFilterGroup === 'favorite') {
    AppState.onlyFavorite = !filterElement.classList.contains('active');
  } else {
    !filterElement.classList.contains('active')
      ? AppState[inputFilterKey].push(inputFilterValue)
      : (AppState[inputFilterKey] = AppState[inputFilterKey].filter(elem => elem !== inputFilterValue));
  }
  filterElement.classList.toggle('active');
  renderToys(filterToys()); */

export function renderTree() {
  treeMain.src = `../assets/tree/${AppState.tree}.png`;
  treeMainContainer.style.backgroundImage = `url('../assets/bg/${AppState.background}.jpg'`;
  if (AppState.snow) {
    snowWrapper.classList.remove('hide');
    snowButton.classList.add('active');
  } else {
    snowWrapper.classList.add('hide');
    snowButton.classList.remove('active');
  }

  AppState.audio ? audioButton.classList.add('active') : audioButton.classList.remove('active');
  /* if (AppState.audio) {
    audio.play();//
    audioButton.classList.add('active');
  } else {
    audio.pause();
    audio.currentTime = 0;
    audioButton.classList.remove('active');
  } */
}



function audioOnload() {
  console.log('handleAudio');  
  handleAudio();
  document.removeEventListener('click', audioOnload);
}

document.addEventListener('click', audioOnload);

export function handleAudio() {
  if (AppState.audio) {
    audio.play();//
    //audioButton.classList.add('active');
  } else {
    audio.pause();
    audio.currentTime = 0;
    //audioButton.classList.remove('active');
  }
}



export function chooseTree(e: Event) {
  const target = e.target as HTMLTemplateElement;
  const elem = treeMain as HTMLImageElement;
  if (target.classList.contains('tree-item')) {
    elem.src = `../assets/tree/${target.dataset.tr}.png`;
  }
}

/* export function handleAudio() {
  if (!audioButton.classList.contains('active')) {
   
    audioButton.classList.add('active');

    audio.play();
  } else {
    audioButton.classList.remove('active');
    audio.pause();
    audio.currentTime = 0;
  }
} */

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
  const elem = treeMainContainer as HTMLTemplateElement;
  if (target.classList.contains('bg')) {
    elem.style.backgroundImage = `url('../assets/bg/${target.dataset.back}.jpg'`;
  }
}
