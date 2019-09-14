/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
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
        <View style={{flex: 20, backgroundColor: '#e0e0e1'}}>
          <View style={styles.listContainer}>
            <TouchableOpacity style={styles.mapContainer}>
              <View style={styles.mapView}>
                <Image
                  style={styles.map}
                  source={require('../static/examples/map.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.detailContainer}>
              <View style={styles.detailView}>
                <View style={styles.titleView}>
                  <Text style={styles.titleText}>
                    [수원] 영통역 중급 영어회화
                  </Text>
                </View>
                <View style={styles.contentView}>
                  <View stlye={styles.photoContainer}>
                    <Image
                      style={styles.photo}
                      source={require('../static/examples/study1.jpg')}
                    />
                  </View>
                  <View style={styles.compound}>
                    <View style={styles.detailTextView}>
                      <Text style={styles.detailText}>
                        영통역 3번출구 할리스
                      </Text>
                      <Text style={styles.detailText}>
                        6월 18일 오후 3시~5시
                      </Text>
                      <Text style={styles.detailText}>정원 3~6명</Text>
                    </View>
                    <TouchableOpacity style={styles.ownerView}>
                      <View style={styles.ownerTextView}>
                        <Text style={styles.ownerText}>Level 5</Text>
                        <Text style={styles.ownerText}>파트라슈</Text>
                      </View>
                      <Image
                        style={styles.ownerPhoto}
                        source={require('../static/examples/profile-photo.jpg')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.timingView} />
              </View>
            </View>
            <View style={styles.visitorContainer} />
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
  mapContainer: {
    flex: 3,
  },
  mapView: {
    flex: 1,
    flexDirection: 'row',
  },
  map: {
    resizeMode: 'cover',
    flexDirection: 'row',
    flex: 1,
  },
  detailContainer: {
    flex: 4,
  },
  detailView: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
  },
  titleView: {
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    margin: 5,
  },
  contentView: {
    flex: 4,
    // borderWidth: 1,
    flexDirection: 'row',
  },
  photoContainer: {
    flex: 1,
  },
  photo: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1,
    margin: 5,
    marginLeft: 25,
  },
  compound: {
    flex: 1,
    margin: 5,
  },
  detailTextView: {
    flex: 1,
  },
  detailText: {
    fontSize: 12,
    textAlign: 'center',
  },
  ownerView: {
    flex: 1,
    // borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#d0d0d1',
  },
  ownerTextView: {
    flex: 2,
  },
  ownerText: {
    fontSize: 10,
    textAlign: 'center',
    margin: 3,
  },
  ownerPhoto: {
    flex: 0.7,
    resizeMode: 'cover',
    aspectRatio: 1,
    // margin: 5,
    marginRight: 25,
    // alignItems: 'left',
    borderRadius: 5,
  },
  timingView: {
    flex: 2,
    borderWidth: 1,
  },
  visitorContainer: {
    flex: 2.5,
  },
});
