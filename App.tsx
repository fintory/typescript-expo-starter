import React from 'react'
import { Image, Platform, View, StatusBar } from 'react-native'
import { AppLoading, SplashScreen } from 'expo'
import { Asset } from 'expo-asset'

import AppNavigator from './src/navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  }

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      )
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image source={require('./src/assets/splash.png')} onLoad={this._cacheResourcesAsync} />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    )
  }

  _cacheSplashResourcesAsync = async () => {
    const splash = require('./src/assets/splash.png')
    return Asset.fromModule(splash).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
    SplashScreen.hide()
    const images = [
      // Insert prefetching shit here
      // require('EXAMPLE IMAGE PATH'),
    ]

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })

    await Promise.all(cacheImages)
    this.setState({ isAppReady: true })
  }
}
