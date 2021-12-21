import { AppState } from './storage';
import { countSlider, yearSlider } from './storage';
import noUiSlider from 'nouislider';
import { target } from 'nouislider';
import { renderToys } from './renderToys';
import { filterToys } from './filterData';

export function initCountSlider() {
  noUiSlider.create(countSlider, {
    start: [AppState.countFilter[0], AppState.countFilter[1]],
    step: 1,
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
      min: 1,
      max: 12,
    },
  });
  (countSlider as target).noUiSlider?.on('set', () => {
    const positions = JSON.parse(JSON.stringify((countSlider as target).noUiSlider?.get()));
    AppState.countFilter = [Number(positions[0]), Number(positions[1])];
    renderToys(filterToys());
  });
}

export function setCountSlider(input: [number, number]) {
  (countSlider as target).noUiSlider?.set(input);
}

export function setYearSlider(input: [number, number]) {
  (yearSlider as target).noUiSlider?.set(input);
}

export function initYearSlider() {
  noUiSlider.create(yearSlider, {
    start: [AppState.yearFilter[0], AppState.yearFilter[1]],
    step: 10,
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
      min: 1940,
      max: 2020,
    },
  });
  (yearSlider as target).noUiSlider?.on('set', () => {
    const positions = JSON.parse(JSON.stringify((yearSlider as target).noUiSlider?.get()));
    AppState.yearFilter = [Number(positions[0]), Number(positions[1])];
    renderToys(filterToys());
  });
}
