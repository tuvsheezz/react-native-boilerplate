import React from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

export default function App() {

  return (
    <Routes />
  );
}

AppRegistry.registerComponent('App', () => App)
