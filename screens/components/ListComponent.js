import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

//<View style={styles.bottomView}>
//  <View style={styles.tags}>
//    <Text style={StyleSheet.flatten([styles.tag, styles.yellow])}>
//      {this.props.item.tags[0]}
//    </Text>
//    <Text style={StyleSheet.flatten([styles.tag, styles.orrange])}>
//      {this.props.item.tags[1]}
//    </Text>
//    <Text style={StyleSheet.flatten([styles.tag, styles.blue])}>
//      {this.props.item.tags[2]}
//    </Text>
//    <Text style={StyleSheet.flatten([styles.tag, styles.green])}>
//      {this.props.item.tags[3]}
//    </Text>
//  </View>
//</View>

// <View style={styles.topView}>
//   <Text style={styles.topText}>3Km 이내</Text>
//   <Text style={styles.topText}>영통역</Text>
// </View>

export default class ListComponent extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.middleView}>
          <Image style={styles.icon} source={this.props.item.image} />
          <View style={styles.content}>
            <Text style={styles.titleText}>{this.props.item.title}</Text>
            <Text style={styles.detailText}>영통역 3번출구 할리스</Text>
            <Text style={styles.detailText}>6월 18일 오루 3시~5시</Text>
            <Text style={styles.detailText}>정원 3~6명</Text>
          </View>
        </View>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Detail');
  };
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 8,
    borderRadius: 10,
    // fontSize: 7,
    // height: 184,
    // flex: 0.5,
    backgroundColor: 'white',
  },
  topView: {
    height: 35,
    flexDirection: 'row',
  },
  topText: {
    flex: 1,
    fontSize: 11,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    backgroundColor: '#e2e2e2',
  },
  middleView: {
    // height: 160,
    flex: 10,
    flexDirection: 'row',
    // borderStyle: 'dotted',
    borderWidth: 0,
    borderRadius: 15,
    margin: 9,
  },
  icon: {
    flex: 1.5,
    // width: 80,
    // height: 80,
    resizeMode: 'contain',
    aspectRatio: 1,
    // margin: 15,
    borderRadius: 4,
    alignItems: 'center',
    // resizeMode: 'stretch',
  },
  content: {
    flex: 4,
  },
  titleText: {
    flex: 3,
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'left',
    marginTop: 10,
  },
  detailText: {
    flex: 1,
    fontSize: 12,
    marginLeft: 20,
    textAlign: 'left',
  },
  bottomView: {
    flexDirection: 'row',
  },
  tags: {
    flex: 1,
    flexDirection: 'row',
  },
  tag: {
    flex: 1,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 5,
    margin: 5,
    color: 'white',
  },
  bottomImage: {
    margin: 5,
    flex: 1,
  },
  yellow: {
    backgroundColor: '#808081',
  },
  orrange: {
    backgroundColor: '#fdba31',
  },
  blue: {
    backgroundColor: '#006599',
  },
  green: {
    backgroundColor: '#2bac23',
  },
});
