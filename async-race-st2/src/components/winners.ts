import { appState } from './store';
import { winnersInner, winnersCount, winnersCurrentPageNum } from './main';
import { getWinners, getCarData } from './api';
import { IWinner, ICar } from './interfaces';

export function renderWinnerCard(curr: number, { name, color }: ICar, { id, time, wins }: IWinner) {
  const winnerCard = document.createElement('div');
  winnerCard.classList.add('winner-card');
  winnerCard.setAttribute('data-winner-id', String(id));
  winnerCard.innerHTML = `<div class="winner-card-item winner-card-num">${curr + 1}</div>
  <div class="winner-card-item winner-card-car"><i class="fas fa-car-side" style="color: ${color};"></i></div>
  <div class="winner-card-item winner-card-name">${name}</div>
  <div class="winner-card-item winner-card-wins">${wins}</div>
  <div class="winner-card-item winner-card-time">${time}</div>`;
  return winnerCard;
}

export async function renderWinners() {
  await getWinners();
  winnersCount.textContent = appState.winnersAmount;
  winnersCurrentPageNum.textContent = String(appState.garagePageCurrent);
  winnersInner.innerHTML = '';
  for (let i = 0; i < appState.winners.length; i++) {
    const res = (await getCarData(appState.winners[i].id)) as ICar;
    winnersInner.append(renderWinnerCard(i, res, appState.winners[i]));
  }
}
