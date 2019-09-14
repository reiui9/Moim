import {StyleSheet} from 'react-native';

const DefaultStyle = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  icon: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    paddingTop: 5,
  },
  listItem: {
    padding: 10,
    margin: 10,
    fontSize: 18,
    height: 84,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  menuButton: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchButton: {
    flex: 8,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    color: 'black',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: '#b0b0b1',
  },
  searchText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
    color: 'white',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 15,
    color: 'white',
  },
});

export default DefaultStyle;
