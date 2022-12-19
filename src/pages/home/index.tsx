import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwiperCom from './components/swiper/swiper';

const handlePress = (path: string) => {
  if (path === 'suggestedFeedback') {
    ToastAndroid.show('该功能还在路上...', ToastAndroid.SHORT);
  }
};
let itemList = [
  [
    {
      title: '创建课程',
      icon: 'create-outline',
      path: 'AddCourse',
    },
    {
      title: '创建试卷',
      icon: 'document-outline',
      path: 'AddExam',
    },
    {
      title: '成绩统计',
      icon: 'analytics-outline',
      path: 'Analysis',
    },
  ],
  [
    {
      title: '视听空间',
      icon: 'videocam-outline',
      path: 'VideoList',
    },
    {
      title: '我的实验',
      icon: 'eye-outline',
      path: 'experiment',
    },
    {
      title: '建议反馈',
      icon: 'chatbox-ellipses-outline',
      path: 'suggestedFeedback',
    },
  ],
];
const listItems = itemList.map((itemArray, i) => {
  return (
    <View
      style={{flexDirection: 'row', justifyContent: 'space-around'}}
      key={i}>
      {itemArray.map(item => {
        return (
          <TouchableOpacity
            key={item.title}
            onPress={() => {
              handlePress(item.path);
            }}>
            <View key={item.title}>
              <Ionicons name={item.icon} size={60} />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});
const HomePage = () => {
  return (
    <View>
      <SwiperCom />
      {listItems}
    </View>
  );
};
export default HomePage;
