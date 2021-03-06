import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Segmented = ({ setMapType, mapType }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginVertical: 10,
        alignItems: "center",
      }}
    >
      {mapType.map((item) => {
        return (
          <TouchableOpacity
            key={item.mapType}
            onPress={() => {
              setMapType(item.mapType);
            }}
            style={{ padding: 4, borderWidth: 1 }}
          >
            <Text>{item.mapType}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Segmented;

const styles = StyleSheet.create({});
