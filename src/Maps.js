import React, { useState } from "react";
import MapView, { Polyline } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { Night } from "./custom/Night";
import { Retro } from "./custom/Retro";
import { Aubergine } from "./custom/Aubergine";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MapSetting from "./component/MapSetting";
export default function Map() {
  const [modalVisible, setModalVisible] = useState(false);
  const [mapType, setMapType] = useState("standard");
  const [customMapStyle, setCustomMapStyle] = useState(Retro);
  return (
    <View style={styles.container}>
      <MapSetting
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setMapType={setMapType}
        setCustomMapStyle={setCustomMapStyle}
      />
      <MapView
        showsMyLocationButton
        showsUserLocation={true}
        style={styles.map}
        customMapStyle={customMapStyle}
        mapType={mapType}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline
          geodesic
          coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
            { latitude: 37.7896386, longitude: -122.421646 },
            { latitude: 37.7665248, longitude: -122.4161628 },
            { latitude: 37.7734153, longitude: -122.4577787 },
            { latitude: 37.7948605, longitude: -122.4596065 },
            { latitude: 37.8025259, longitude: -122.4351431 },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={6}
        />
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          bottom: "10%", //for center align
          right: "10%", //for align to right
        }}
      >
        <Icon
          name="cog"
          size={36}
          color="white"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
