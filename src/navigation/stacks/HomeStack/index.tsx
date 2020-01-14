import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

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
