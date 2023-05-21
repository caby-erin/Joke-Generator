// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1> Joke Generator 3000</h1>
    <small>It's chuckle time</small><br />
    <button class="btn btn-danger" id="get-joke">Generate a Joke</button><br />
    <hr />
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  /* document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!')); */

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

const newJoke = () => {
  getRequest().then((item) => {
    renderToDom('#joke-container', item.setup);
  });
};

const events = () => {
  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then(newJoke);
  });
};

const startApp = () => {
  init();
  events();
};

startApp();
