import { appState } from './store';
import {
  winnersInner,
  winnersCount,
  winnersCurrentPageNum,
  winnersNext,
  winnersPrev,
  sortWinsButton,
  sortTimeButton,
} from './main';
import { getWinners, getCarData, createWinnerApi } from './api';
import { IWinner, ICar } from './interfaces';
import { App } from './app';

export function renderWinnerCard(curr: number, { name, color }: ICar, { id, time, wins }: IWinner) {
  const winnerCard = document.createElement('div');
  winnerCard.classList.add('winner-card');
  winnerCard.setAttribute('data-winner-id', String(id));
  winnerCard.innerHTML = `<div class="winner-card-item winner-card-num">${
    (appState.winnersPageCurrent - 1) * 10 + curr + 1
  }</div>
  <div class="winner-card-item winner-card-car"><i class="fas fa-car-side" style="color: ${color};"></i></div>
  <div class="winner-card-item winner-card-name">${name}</div>
  <div class="winner-card-item winner-card-wins">${wins}</div>
  <div class="winner-card-item winner-card-time">${time}</div>`;
  return winnerCard;
}

export async function renderWinners() {
  await getWinners();
  winnersCount.textContent = appState.winnersAmount;
  winnersCurrentPageNum.textContent = String(appState.winnersPageCurrent);
  appState.winnersPageCurrent === 1 ? (winnersPrev.disabled = true) : (winnersPrev.disabled = false);
  Number(appState.winnersAmount) / appState.winnersPageLimit <= appState.winnersPageCurrent
    ? (winnersNext.disabled = true)
    : (winnersNext.disabled = false);
  winnersInner.innerHTML = '';
  for (let i = 0; i < appState.winners.length; i++) {
    const res = (await getCarData(appState.winners[i].id)) as ICar;
    winnersInner.append(renderWinnerCard(i, res, appState.winners[i]));
  }
}

export function sortWinnersTable(e: Event) {
  const sorting = (e.target as HTMLElement).dataset.sorting as string;
  appState.sortBy = sorting as 'wins' | 'time';
  if (appState.sortOrder === 'ASC') {
    appState.sortOrder = 'DESC';
  } else {
    appState.sortOrder = 'ASC';
  }
  renderWinners();
}

/* export async function randomWinnersGenerate() {
  if (appState.cars.length === 0) return false;
  for (let i = 0; i < 10; i++) {
    const wId = appState.cars[Math.floor(Math.random() * appState.cars.length)].id;
    const wTime = Math.round(Math.random() * 10) + 1;
    const wWins = Math.round(Math.random() * 10) + 1;
    const winner: IWinner = { id: wId, time: wTime, wins: wWins };
    await createWinnerApi(winner);
  }
  renderWinners();
} */
