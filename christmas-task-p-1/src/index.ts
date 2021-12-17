import image from './images/lazy.png';//

/* import './style.css'; */

/* import './sass/style.scss'; */


import App from './components/app/app'


const app = new App();
app.start();

/* const createImage = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  }); */

/* async function render() {
  const subHeader = document.createElement('h2');
  subHeader.innerHTML = 'This elements was created by js';
  const myImage = await createImage(image);
  document.body.appendChild(subHeader);
  document.body.appendChild(myImage); 
  console.log(data);
}

render(); */
