import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const makeData = (id, title, image, screen) => ({
  id, title, image, screen,
})

const data = [
  makeData('123', 'Get a ride', 'https://links.papareact.com/3pn', 'MapScreen'),
  makeData('456', 'Order food', 'https://links.papareact.com/28w', 'EatScreen'),
]

export const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`pt-4 pr-2 pb-8 pl-6 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
            />
          </View>
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 h-10 mt-4`}
            type="antdesign"
            name="arrowright"
            color="white"
          />
        </TouchableOpacity>
      )}
    />
  )
}
