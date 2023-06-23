import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  render(){
    return <BottomTabNavigator />
  }
}


import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TransactionScreen from '../screens/Transaction';
import SearchScreen from './screens/Search';