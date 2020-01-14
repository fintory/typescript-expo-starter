import { createBottomTabNavigator } from 'react-navigation-tabs'

import { HomeStack } from './stacks/HomeStack'
import { ArticleStack } from './stacks/ArticleStack'

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
