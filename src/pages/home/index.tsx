import React from 'react';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
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
      path: 'AddCourse',
    },
    {
      title: '创建试卷',
      path: 'AddExam',
    },
    {
      title: '成绩统计',
      path: 'Analysis',
    },
  ],
  [
    {
      title: '视听空间',
      path: 'VideoList',
    },
    {
      title: '我的实验',
      path: 'experiment',
    },
    {
      title: '建议反馈',
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
              {/* <Image style={style.opImg} source={item.image} /> */}
              {/* style={style.opText} */}
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
