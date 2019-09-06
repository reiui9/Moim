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
        <View style={{flex: 14, backgroundColor: '#e0e0e1'}}>
          <View style={styles.listContainer}>
            <FlatList
              data={[
                {key: '모임1'},
                {key: '모임2'},
                {key: '모임3'},
                {key: '모임4'},
                {key: '모임5'},
                {key: '모임6'},
                {key: '모임7'},
                {key: '모임8'},
                {key: '모임9'},
                {key: '모임10'},
                {key: '모임11'},
                {key: '모임12'},
              ]}
              renderItem={({item}) => (
                <TouchableOpacity onPress={this._showMoreApp}>
                  <Text style={styles.listItem}>{item.key}</Text>
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
    flex: 1,
    paddingTop: 5,
  },
  listItem: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 18,
    height: 84,
    backgroundColor: 'white',
  },
});
