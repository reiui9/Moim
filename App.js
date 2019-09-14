import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import {
  ListScreen,
  DetailScreen,
  AuthLoadingScreen,
  InitialScreen,
  HostScreen,
  VisitorScreen,
  ProfileScreen,
} from './screens';

const AppStack = createDrawerNavigator(
  {
    List: ListScreen,
    Detail: DetailScreen,
    Host: HostScreen,
    Visitor: VisitorScreen,
    Profile: ProfileScreen,
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#F6F3F1',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#FC6D34',
    },
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn: InitialScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
