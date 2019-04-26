import React from 'react';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store/store.js';
import handleSearchInputChange from './actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

render(
  <Provider store={store}>
    <App handleSearchInputChange={handleSearchInputChange} />
  </Provider>, document.getElementById('app')
);
