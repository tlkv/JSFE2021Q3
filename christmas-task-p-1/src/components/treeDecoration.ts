import {
  treeMain,
  userTreeFilters,
  treeMainContainer,
  audioButton,
  snowWrapper,
  snowButton,
  lightsButton,
  AppState,
} from './storage';
import { TreeKeys } from './interfaces';
import { handleAudio } from './audio';
import { renderLights } from './lights';

export function handleTreeFilters(e: Event) {
  const filterElement = e.target as HTMLElement;
  if (!filterElement.classList.contains('tree-filter-item')) {
    return false;
  }
  console.log(filterElement.dataset);
  const inputFilterKey = filterElement.dataset.group as TreeKeys;
  const inputFilterValue = filterElement.dataset.value as string;
  if (inputFilterKey === 'audio' || inputFilterKey === 'snow' || inputFilterKey === 'lightsOn') {
    AppState[inputFilterKey] = !filterElement.classList.contains('active');
  } else {
    AppState[inputFilterKey] = inputFilterValue;
  }
  renderTree();
  handleAudio();
  console.log(AppState);
}

export function renderTree() {
  treeMain.src = `./assets/tree/${AppState.tree}.png`;
  treeMainContainer.style.backgroundImage = `url('./assets/bg/${AppState.background}.jpg'`;
  if (AppState.snow) {
    snowWrapper.classList.remove('hide');
    snowButton.classList.add('active');
  } else {
    snowWrapper.classList.add('hide');
    snowButton.classList.remove('active');
  }
  AppState.lightsOn ? lightsButton.classList.add('active') : lightsButton.classList.remove('active');
  AppState.audio ? audioButton.classList.add('active') : audioButton.classList.remove('active');
  renderLights();
  ['tree', 'background', 'lights'].forEach(tItem => {
    userTreeFilters.querySelectorAll(`[data-group='${tItem}']`)?.forEach(item => {
      const data = tItem as TreeKeys;
      const elem = item as HTMLElement;
      elem.dataset['value'] === AppState[data] ? elem.classList.add('active') : elem.classList.remove('active');
    });
  });
}
