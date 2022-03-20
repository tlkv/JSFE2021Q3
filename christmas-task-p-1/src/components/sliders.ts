import noUiSlider from 'nouislider';
import { target } from 'nouislider';
import { filterToys } from './filterData';
import { AppState } from './storage';
import { FilterValues } from './interfaces';
import { renderToys } from './renderToys';

export function initSlider(
  elem: HTMLElement,
  currentValues: FilterValues,
  defaultValues: FilterValues,
  step: number,
  stateKey: 'countFilter' | 'yearFilter',
) {
  noUiSlider.create(elem, {
    start: currentValues,
    step: step,
    connect: true,
    tooltips: true,
    format: {
      to(value) {
        return Math.floor(Number(value));
      },
      from(value) {
        return Math.floor(Number(value));
      },
    },
    range: {
      min: defaultValues[0],
      max: defaultValues[1],
    },
  });
  (elem as target).noUiSlider?.on('set', () => {
    const positions = JSON.parse(JSON.stringify((elem as target).noUiSlider?.get()));
    AppState[stateKey] = [Number(positions[0]), Number(positions[1])];
    renderToys(filterToys());
  });
}

export function setSlider(elem: HTMLElement, input: [number, number]) {
  (elem as target).noUiSlider?.set(input);
}
