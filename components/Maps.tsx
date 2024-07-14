import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from "react-native-maps";

export default function Maps() {
  return (
    <View >
         <MapView
        className="w-full h-full"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>
    </View>
  )
}