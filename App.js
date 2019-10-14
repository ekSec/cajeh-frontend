import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LobbyScreen from './src/LobbyScreen/LobbyScreen.js';
import MyPublish from './src/CollaboratorGear/MyPublish.js';
import MyMaterial from './src/CollaboratorGear/MyMaterial.js';
import DoPublish from './src/CollaboratorGear/DoPublish.js';
import EditMaterial from './src/CollaboratorGear/EditMaterial.js';
import BuildMaterial from './src/CollaboratorGear/BuildMaterial.js';
import MySaves from './src/LobbyScreen/MySaves.js';

const AppNavigator = createStackNavigator({
  Lobby: {
    screen: LobbyScreen,
    navigationOptions: () => ({
      header: null,
      footer: null,
    }),
  },
  MyPublish: {
    screen: MyPublish,
    navigationOptions: () => ({
      header: null,
      footer: null,
    }),
  },
  MyMaterial: {
    screen: MyMaterial,
    navigationOptions: () => ({
      header: null,
    }),
  },
  DoPublish: {
    screen: DoPublish,
    navigationOptions: () => ({
      header: null,
    }),
  },
  EditMaterial: {
    screen: EditMaterial,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BuildMaterial: {
    screen: BuildMaterial,
    navigationOptions: () => ({
      header: null,
    }),
  },
  MySaves: {
    screen: MySaves,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppNavigator);
