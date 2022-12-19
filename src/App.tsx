import * as React from 'react';
import AppContainer from './navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;
