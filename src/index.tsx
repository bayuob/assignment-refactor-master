import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';

import { ShopApp } from './pages/ShopApp/shop-app';
import * as serviceWorker from './services/serviceWorker';

Modal.setAppElement("#root")

ReactDOM.render(
  <React.StrictMode>
    <ShopApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
