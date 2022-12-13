import * as React from 'react';
import AppContainer from './navigation';
// import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import nav from './navigation/index';
// const screenOptions = (route, color) => {
//   let IconName;

//   switch (route.name) {
//     case 'Home':
//       IconName = 'home-outline';
//       break;
//   }
//   return <Text>IconName</Text>;
// };
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;
