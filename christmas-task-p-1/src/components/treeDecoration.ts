import { treeMain, treeMainContainer, audioButton, snowWrapper, snowButton, AppState } from './storage';
import { TreeKeys } from './interfaces';
import { handleAudio } from './audio';

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
  } else {
    AppState[inputFilterKey] = inputFilterValue;
  }
  renderTree();
  handleAudio();
  console.log(AppState);
}

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
}
