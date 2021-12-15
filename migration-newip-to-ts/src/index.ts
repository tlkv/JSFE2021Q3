import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const header = document.querySelector('.selector-buttons');
for (let i = 0; i<26; i++) {
  const button = document.createElement('button');
  button.textContent = String.fromCharCode(65+i);
  header?.append(button);
  button.addEventListener('click', filterNews);
}

function filterNews(e: Event) {
  const letter = (e.target as HTMLElement).textContent?.toLowerCase().charAt(0);
  const sourceItems = document.querySelectorAll('.source__item');


  
  for (const item of sourceItems) {
    
    if (letter !== item.querySelector('.source__item-name')?.textContent?.toLowerCase().charAt(0)) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
    
  }
}
