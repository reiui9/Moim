/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {ListComponent} from './components';
import DefaultStyle from '../styles/DefaultStyle.js';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'List Screen',
    drawerLabel: '모임 찾기',
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={DefaultStyle.topView}>
          <TouchableOpacity onPress={this._openDrawer} style={{flex: 1}}>
            <View style={DefaultStyle.menuButton}>
              <Image
                style={DefaultStyle.icon}
                source={require('../static/menu-icon.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._signInAsync} style={{flex: 8}}>
            <View style={DefaultStyle.searchButton}>
              <Text style={DefaultStyle.searchText}>검색</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._signOutAsync} style={{flex: 1}}>
            <View style={DefaultStyle.menuButton}>
              <Image
                style={DefaultStyle.icon}
                source={require('../static/logout-icon.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 20, backgroundColor: '#e0e0e1'}}>
          <View style={styles.listContainer}>
            <FlatList
              data={[
                {
                  key: '1',
                  title: '[수원] 영통역 중급 영어회화',
                  tags: ['영어', '회화', '중급', '수원'],
                  image: require('../static/examples/study1.jpg'),
                },
                {
                  key: '2',
                  title: '광교역 근처 초급 영어회화',
                  tags: ['영어', '회화', '초급', '광교'],
                  image: require('../static/examples/study2.jpg'),
                },
                {
                  key: '3',
                  title: '영통역 근처 농구팀 구합니다.',
                  tags: ['농구', '팀', '초급', '영통'],
                  image: require('../static/examples/study3.jpg'),
                },
                {
                  key: '4',
                  title: '[수원] 영통역 중급 영어회화',
                  tags: ['영어', '회화', '중급', '수원'],
                  image: require('../static/examples/study1.jpg'),
                },
                {
                  key: '5',
                  title: '광교역 근처 초급 영어회화',
                  tags: ['영어', '회화', '초급', '광교'],
                  image: require('../static/examples/study2.jpg'),
                },
                {
                  key: '6',
                  title: '영통역 근처 농구팀 구합니다.',
                  tags: ['농구', '팀', '초급', '영통'],
                  image: require('../static/examples/study3.jpg'),
                },
              ]}
              renderItem={({item}) => (
                <TouchableOpacity onPress={this._showMoreApp}>
                  <ListComponent item={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={{flex: 1.5, backgroundColor: '#fc7b48'}}>
          <TouchableOpacity onPress={this._openHost} style={{flex: 1}}>
            <View>
              <Text style={DefaultStyle.buttonText}>모임 만들기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Detail');
    // this.props.navigation.push('Detail', {
    //           itemId: Math.floor(Math.random() * 100),
    //         })
  };

  _openHost = () => {
    this.props.navigation.navigate('Host');
    // this.props.navigation.push('Detail', {
    //           itemId: Math.floor(Math.random() * 100),
    //         })
  };

  _signOutAsync = () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 5,
  },
});
