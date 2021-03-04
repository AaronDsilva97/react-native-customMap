import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Night } from "./custom/Night";
import { Retro } from "./custom/Retro";
export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} customMapStyle={Retro} />
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
