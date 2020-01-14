import React from 'react'

import { SafeAreaView, Text } from 'react-native'

import { Wrapper } from './styles'

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Wrapper>
        <Text>Home</Text>
      </Wrapper>
    </SafeAreaView>
  )
}
