import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

//routing
import Router from './src/router'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
}