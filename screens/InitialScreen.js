/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class SignInScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={{flex: 1, backgroundColor: '#fc7b48'}}>
          <View style={{flex: 1}} />
          <View style={{flex: 1}}>
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
                  Moim
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={this._signInAsync}>
              <View style={styles.kakaoButton}>
                <Text style={styles.buttonText}>카카오톡으로 로그인</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._signInAsync}>
              <View style={styles.googleButton}>
                <Text style={styles.buttonText}>구글로 로그인</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._signInAsync}>
              <View style={styles.facebookButton}>
                <Text style={styles.buttonText}>페이스북으로 로그인</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  kakaoButton: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#ecbb08',
  },
  googleButton: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#a90412',
  },
  facebookButton: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#0047a0',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
});
