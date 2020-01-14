import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../../../screens/Home'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
}
