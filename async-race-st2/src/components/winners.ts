/* eslint-disable import/no-cycle */
import appState from './store';
import {
  winnersInner,
  winnersCount,
  winnersCurrentPageNum,
  winnersNext,
  winnersPrev,
  winnerPopup,
} from './main';
// eslint-disable-next-line object-curly-newline
import { getWinners, getCarData, createWinnerApi, updateWinnerApi, getWinner } from './api';
import { IWinner, ICar, IWinnerData } from './interfaces';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  appState.winnersPageCurrent === 1
    ? (winnersPrev.disabled = true)
    : (winnersPrev.disabled = false);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  Number(appState.winnersAmount) / appState.winnersPageLimit <= appState.winnersPageCurrent
    ? (winnersNext.disabled = true)
    : (winnersNext.disabled = false);
  winnersInner.innerHTML = '';
  for (let i = 0; i < appState.winners.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
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

export async function createWinner(winner: IWinnerData): Promise<void> {
  const carWinner: IWinner = {
    id: winner.id,
    wins: 1,
    time: winner.time,
  };

  await createWinnerApi(carWinner);
}

export async function updateWinner(winner: IWinnerData): Promise<void> {
  const carWinner: IWinner = {
    id: winner.id,
    wins: winner.wins,
    time: winner.time,
  };
  await updateWinnerApi(carWinner);
}

export async function handleNewWinner(winner: IWinnerData) {
  const car = await getWinner(winner.id);
  if (car.status === 200) {
    car.result.wins += 1;
    if (winner.time && winner.time > car.result.time) {
      // eslint-disable-next-line no-param-reassign
      winner.time = car.result.time;
    }
    // eslint-disable-next-line no-param-reassign
    winner.wins = car.result.wins;
    await updateWinner(winner);
  } else {
    await createWinner(winner);
  }
  renderWinners();
}

export async function showWinner(winner: IWinnerData) {
  winnerPopup.innerHTML = `
  <h2>Winner</h2>
  <p>${winner.name} went first with ${winner.time} sec.</p>`;
  winnerPopup.classList.remove('hide');
  setTimeout(() => {
    winnerPopup.classList.add('hide');
  }, 2000);
  await handleNewWinner(winner);
}
