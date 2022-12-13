import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/home/index';
import NetDisk from '../pages/netDick/index';
import Search from '../pages/search/index';
import UserCenter from '../pages/user/UserCenter';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import {Text, View, Button} from 'react-native';
// const Stack = createNativeStackNavigator();
// const Home = ({navigation}: any): React.ReactElement => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <View>
//         <Text style={{color: 'black'}}>Home Screen</Text>
//       </View>

//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };
// const DetailsScreen = (): React.ReactElement => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };
const Tab = createBottomTabNavigator();
const AppContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '首页') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === '搜索') {
            iconName = focused ? 'search' : 'search-outline';
          }
          if (route.name === '网盘') {
            iconName = focused ? 'planet' : 'planet-outline';
          }
          if (route.name === '我的') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
      })}>
      <Tab.Screen name="首页" component={HomePage} />
      <Tab.Screen name="搜索" component={Search} />
      <Tab.Screen name="网盘" component={NetDisk} />
      <Tab.Screen name="我的" component={UserCenter} />
    </Tab.Navigator>
  );
};
export default AppContainer;
