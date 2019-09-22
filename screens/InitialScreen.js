/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NaverLogin} from 'react-native-naver-login';

// TODO: sample initial 추후에 앱 등록하고 바꿔야함.

const dooboolabInitials = {
  kConsumerKey: 'VN6WKGFQ3pJ0xBXRtlN9',
  kConsumerSecret: 'AHBgzH9ZkM',
  kServiceAppName: 'dooboolab',
  kServiceAppUrlScheme: 'dooboolaburlscheme', // only for iOS
};

const naverInitials = {
  kConsumerKey: 'jyvqXeaVOVmV',
  kConsumerSecret: '527300A0_COq1_XV33cf',
  kServiceAppName: '네이버 아이디로 로그인하기',
  kServiceAppUrlScheme: 'thirdparty20samplegame', // only for iOS
};

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
            <TouchableOpacity onPress={this._signInNaver}>
              <Image
                style={styles.signInButton}
                source={require('../static/naver-id-login.png')}
              />
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

  _signInNaver = () => {
    NaverLogin.login(dooboolabInitials, (err, accessToken) => {
      if (err) {
        console.debug(`NaverLogin Error: ${err}`);
        // eslint-disable-next-line prettier/prettier
        Alert.alert(
          '로그인 실패',
          '네이버 아이디로 로그인에 실패하였습니다.',
          // eslint-disable-next-line prettier/prettier
          [{text: '확인'}],
        );
        return;
      }
      console.debug('Login succeeded');
      console.debug(`accessToken: ${accessToken}`);
      this.props.navigation.navigate('App');
    });
  };
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  signInButton: {
    marginBottom: 30,
    height: 55,
    width: 260,
    resizeMode: 'stretch',
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
