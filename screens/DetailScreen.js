/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import DefaultStyle from '../styles/DefaultStyle.js';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail Screen',
    drawerLabel: '참여 모임',
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
        <View style={{flex: 14, backgroundColor: '#e0e0e1'}}>
          <View style={styles.listContainer}>
            <Text>DETAIL SCREEN</Text>
          </View>
        </View>
        <View style={styles.bottomStyle}>
          <TouchableOpacity
            onPress={this._openList}
            style={{flex: 1, borderRightWidth: 1, borderColor: 'white'}}>
            <View>
              <Text style={DefaultStyle.buttonText}>모임 참여하기</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._openVisitor}
            style={{
              flex: 1,
              borderLeftWidth: 1,
              borderColor: 'white',
            }}>
            <View>
              <Text style={DefaultStyle.buttonText}>참여자 보기</Text>
            </View>
          </TouchableOpacity>
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
  listContainer: {
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
