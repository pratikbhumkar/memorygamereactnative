import React from 'react';
import Login from './login';
import MainScreen from './MainScreen'
import GamePlay from './GamePlay'
import Answer from './Answer'
import Correct from './Correct'
import Wrong from './Wrong'
import GameOver from './GameOver'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  
  render() {
    return (
      <TopLevelNavig/>
    );
  }
}
const AppStackNavigator=
createSwitchNavigator(
  {
    login:Login,
MainScreen:MainScreen,
GamePlay:GamePlay,
Answer:Answer,
Correct:Correct,
Wrong:Wrong,
GameOver:GameOver
  },
  {
    initialRouteName: 'login',
  }
);
const TopLevelNavig = createAppContainer(AppStackNavigator);

