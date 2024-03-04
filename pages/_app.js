import '@/styles/reset.scss';
import '@/styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { Provider } from 'react-redux';

import store from '@/slices';

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
