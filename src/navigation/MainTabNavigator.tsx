import { createBottomTabNavigator } from 'react-navigation-tabs'

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
