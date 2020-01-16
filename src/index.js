import React from 'react';
import {StatusBar} from 'react-native';

import App from './App';

export default function index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <App />
    </>
  );
}
