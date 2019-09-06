import {StyleSheet} from 'react-native';

const DefaultStyle = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    resizeMode: 'stretch',
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
    backgroundColor: '#ecbb08',
  },
  searchButton: {
    flex: 8,
    marginLeft: 15,
    marginRight: 15,
    margin: 1,
    alignItems: 'center',
    color: 'black',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: '#a0a0a1',
  },
  searchText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    color: 'white',
  },
  buttonText: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    color: 'white',
  },
});

export default DefaultStyle;
