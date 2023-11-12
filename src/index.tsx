/* @refresh reload */
import { render } from 'solid-js/web'
import App from './Router'
import './style.css'

if (window.cordova) {
  // Running on Cordova
  document.addEventListener('deviceready', () => {
    console.log('Running cordova-' + window.cordova.platformId + '@' + window.cordova.version);
    render(() => <App />, document.getElementById('root')!)
  }, false);
} else {
  // Standard Web
  document.addEventListener("DOMContentLoaded", () => {
    console.log("RUNNING ON STD WEB");
    render(() => <App />, document.getElementById('root')!)
  }, false)
}