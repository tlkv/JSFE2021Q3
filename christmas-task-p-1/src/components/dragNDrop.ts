export function handleOverDrop(e: Event) {
  e.preventDefault();
  if (e.type !== 'drop') {
    return false;
  }
  const draggedId = (e as DragEvent).dataTransfer?.getData('text');
  const draggedEl = document.getElementById(draggedId as string) as HTMLElement;
  const counter = draggedEl.parentElement?.querySelector('.favorites-count') as HTMLElement;
  if (Number(counter.textContent) > Number(draggedEl.dataset.count) - Number(draggedEl.id[draggedEl.id.length - 1])) {
    counter.textContent = String(Number(draggedEl.dataset.count) - Number(draggedEl.id[draggedEl.id.length - 1]));
  }
  draggedEl.style.left = `calc(${((event as DragEvent).pageX / window.innerWidth) * 100 + '%'} - 30px)`;
  draggedEl.style.top = (event as DragEvent).pageY - 100 + 'px';
  draggedEl.style.zIndex = String(98);
}

export function handleDragStart(e: Event) {
  if (!(e.target as HTMLElement).classList.contains('favorites-card-img')) {
    return false;
  }
  const evt = e.target as HTMLElement; //
  (e as DragEvent).dataTransfer?.setData('text', evt.id);
}
