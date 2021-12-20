
import { countSlider, yearSlider, State } from './storage';
import noUiSlider from 'nouislider';
import { target } from 'nouislider';
import { renderToys } from './renderToys';
import { filterToys } from './filterData';

export function initCountSlider() {
  noUiSlider.create(countSlider, {
    start: [State.countFilter[0], State.countFilter[1]],
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
    console.log('slider1');
    console.log('slVal', typeof Array.from(JSON.stringify((countSlider as target).noUiSlider?.get())));
    const positions = JSON.parse(JSON.stringify((countSlider as target).noUiSlider?.get()));
    State.countFilter = [Number(positions[0]), Number(positions[1])];
    console.log('State CFilteRRR', positions);
    renderToys(filterToys());
  });
}

export function initYearSlider() {
  noUiSlider.create(yearSlider, {
    start: [State.yearFilter[0], State.yearFilter[1]],
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
    console.log('slider2');
    console.log('slVal2', typeof Array.from(JSON.stringify((yearSlider as target).noUiSlider?.get())));
    const positions = JSON.parse(JSON.stringify((yearSlider as target).noUiSlider?.get()));
    State.yearFilter = [Number(positions[0]), Number(positions[1])];
    console.log('State CFilteRRR', positions);
    renderToys(filterToys());
  });
  
}