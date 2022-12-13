import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// };

// const SettingsScreen = () => {
//   return (
//     <View>
//       <Text>Settings</Text>
//     </View>
//   );
// };
{
    /* <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{title: '详情'}}
    />
  </Stack.Navigator>; */
  }
// const Tab = createBottomTabNavigator();
const UserCenter = () => {
  return (
    <View>
      <Text>userCenter</Text>
    </View>
  );
};
export default UserCenter;
