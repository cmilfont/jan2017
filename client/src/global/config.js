import ReactGA from 'react-ga';
import localforage from 'localforage';

window.localforage = localforage;
window.ReactGA = ReactGA;
window.ReactGA.initialize('UA-87321481-1');