
import * as React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppComponent from './components/App';
// import { configureStore } from './store';

// const store = configureStore;

const Root: React.SFC<{}> = () => (
  // <Provider /* store={store} */>
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
  // </Provider>
);

export default Root;
