import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import btonStyle from './button.module.css';
import user from './data.json';
import suma from './suma.ts';

console.log(`La suma de 3 + 6 es ${suma(3,6)}`);

const modules = import.meta.glob('./modules/*.js');

console.log(modules);

for(const path in modules){
  modules[path]().then((module) => {
    module.load()
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Karen!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`
document.getElementById('counter').className = btonStyle.counter;

setupCounter(document.querySelector('#counter'))
