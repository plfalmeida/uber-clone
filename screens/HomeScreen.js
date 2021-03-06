import React from 'react'
import { SafeAreaView, View, Image } from 'react-native'

import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../components/NavOptions';

export function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}