import { carModels } from './carData';

export function getRandomName() {
  const brandItem = carModels[Math.floor(Math.random() * carModels.length)];
  const model = brandItem.models[Math.floor(Math.random() * brandItem.models.length)];
  return `${brandItem.brand} ${model}`;
}

export function getRandomColor() {
  const symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}
