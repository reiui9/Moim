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

export default class VisitorScreen extends React.Component {
  static navigationOptions = {
    title: 'Visitor Screen',
    drawerLabel: '참여 인원',
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
            <Text>VISITOR SCREEN</Text>
          </View>
        </View>
        <View style={styles.bottomStyle}>
          <TouchableOpacity onPress={this._getBack} style={{flex: 1}}>
            <View>
              <Text style={DefaultStyle.buttonText}>뒤로</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  _getBack = () => {
    this.props.navigation.goBack();
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
