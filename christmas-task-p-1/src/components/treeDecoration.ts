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

let interval: NodeJS.Timer;

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
    interval = setInterval(createSnowFlake, 100);
  } else {
    clearInterval(interval);
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

export function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('fas');
  snow_flake.classList.add('fa-snowflake');
  snow_flake.style.left = Math.random() * 690 + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snow_flake.style.opacity = String(Math.random());
  snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

  snowWrapper.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}