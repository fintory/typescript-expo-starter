import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import ArticleScreen from '../../../screens/Article'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

const ArticleStack = createStackNavigator(
  {
    Article: ArticleScreen,
  },
  config
)

ArticleStack.navigationOptions = {
  tabBarLabel: 'Artikel',
}
