/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import DefaultStyle from '../styles/DefaultStyle.js';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen',
    drawerLabel: '내 정보',
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
          <TouchableOpacity onPress={this._signInAsync} style={{flex: 8}} />
          <TouchableOpacity onPress={this._signOutAsync} style={{flex: 1}}>
            <View style={DefaultStyle.menuButton}>
              <Image
                style={DefaultStyle.icon}
                source={require('../static/logout-icon.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 15, backgroundColor: '#e0e0e1'}}>
          <View style={styles.Container}>
            <View style={styles.basic}>
              <Text style={styles.level}>Level 5</Text>
              <TouchableOpacity style={styles.photo}>
                <Image
                  style={styles.photoImage}
                  source={require('../static/examples/profile-photo.jpg')}
                />
              </TouchableOpacity>
              <Text style={styles.name}>파트라슈</Text>
            </View>
            <View style={styles.detail}>
              <TouchableOpacity style={styles.textContainer}>
                <Text style={styles.text}>
                  안녕하세요 파트라슈입니다. 잘부탁드려요.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textContainer}>
                <Text style={styles.text}>
                  영어 중급, 농구 초급, 수원 영통쪽 거주
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Image
                    style={DefaultStyle.icon}
                    source={require('../static/document.png')}
                  />
                  <Text style={styles.buttonName}>히스토리</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Image
                    style={DefaultStyle.icon}
                    source={require('../static/pin.png')}
                  />
                  <Text style={styles.buttonName}>위치설정</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Image
                    style={DefaultStyle.icon}
                    source={require('../static/chat.png')}
                  />
                  <Text style={styles.buttonName}>문의하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  _openList = () => {
    this.props.navigation.navigate('List');
  };

  _openVisitor = () => {
    this.props.navigation.navigate('Visitor');
  };

  _signOutAsync = () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  basic: {
    flex: 2,
    alignItems: 'center',
  },
  level: {
    marginTop: 10,
    flex: 1,
    color: '#1b9c03',
  },
  photo: {
    flex: 5,
    aspectRatio: 1,
  },
  photoImage: {
    borderRadius: 100,
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1,
  },
  name: {
    margin: 10,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    flex: 2,
    alignContent: 'center',
  },
  textContainer: {
    flex: 1,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 13,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
  },
  button: {
    margin: 5,
  },
  buttonName: {
    marginTop: 5,
    fontSize: 10,
  },
  Container: {
    flex: 1,
    paddingTop: 5,
  },
  bottomStyle: {
    flex: 1.5,
    backgroundColor: '#fc7b48',
    flexDirection: 'row',
    padding: 5,
  },
});
