// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
// import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1> Joke Generator 3000</h1>
    <small>It's chuckle time</small><br />
    <div id= "joke-content"></div>
    <div id= "main-container">
    <button class="btn btn-danger" id="get-joke">Generate a Joke</button><br />
    <hr />
    </div>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  /* document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!')); */

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();

  const setButton = (btnTxt, btnId) => {
    document.querySelector('#main-container').innerHTML += `
  <button class='btn btn-success' id='${btnId}'>${btnTxt}</button>
  `;
  };

  let joke = {};

  const setJoke = (obj) => {
    joke = {
      setup: obj.setup,
      punchline: obj.delivery
    };
    return joke;
  };

  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'get-joke') {
      getRequest().then((response) => {
        setJoke(response);

        document.querySelector('#joke-content').innerHTML = `<p>${joke.setup}</p>`;
        setButton('Get Punchline', 'get-punchline-btn');
      });
    }
    if (e.target.id === 'get-punchline-btn') {
      document.querySelector('#joke-content').innerHTML = `<p>${joke.setup}</p>`;
      document.querySelector('#joke-content').innerHTML += `<p>${joke.punchline}</p>`;
      setButton('Get Another Joke', 'get-joke');
    }
  });
};

init();

/*
const newJoke = () => {
  getRequest().then((item) => {
    renderToDom('#joke-container', item.setup);
  });
};

  const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then(newJoke);
    renderToDom('#get-joke', 'Get Punchline');
  });
};
*/

/* const startApp = () => {
  init();
  events();
};

startApp();
*/
