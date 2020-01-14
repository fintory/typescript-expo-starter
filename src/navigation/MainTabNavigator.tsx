import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'

import Facts from '../components/_images/Navbar/Facts'
import Article from '../components/_images/Navbar/Article'

import ArticleInfoScreen from '../screens/ArticleInfoScreen'

import Header from '../components/Header'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Fakten',
  tabBarIcon: ({ focused }) => <Facts active={focused} />,
  tabBarOptions: {
    activeTintColor: '#C00000',
    inactiveTintColor: '#8E8E93',
    style: {
      backgroundColor: 'fff',
      opacity: 0.8,
      paddingTop: 8,
      height: 60,
    },
  },
}

const ArticleStack = createStackNavigator(
  {
    Article: {
      screen: ArticleScreen,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          header: <Header {...navigation} {...screenProps} />,
        }
      },
    },
    ArticleInfo: {
      screen: ArticleInfoScreen,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          header: <Header {...navigation} {...screenProps} />,
        }
      },
    },
  },
  config
)

ArticleStack.navigationOptions = {
  tabBarLabel: 'Artikel',
  tabBarIcon: ({ focused }) => <Article active={focused} />,
  tabBarOptions: {
    activeTintColor: '#C00000',
    inactiveTintColor: '#8E8E93',
    style: {
      backgroundColor: '#fff',
      opacity: 0.8,
      paddingTop: 8,
      height: 60,
    },
  },
}

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ArticleStack,
  },
  {
    initialRouteName: 'HomeStack',
  }
)

export default tabNavigator
