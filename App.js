import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./compunents/Router";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import store from './store/index'
console.disableYellowBox = true


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#038cfc',
    accent: '#f1c40f',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

