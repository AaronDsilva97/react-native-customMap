import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
const PolylineColor = ({ setStrokeColor }) => {
  const [value, onChangeText] = React.useState("#000");
  return (
    <View>
      <Text>Stroke Color</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableHighlight onPress={() => setStrokeColor(value)}>
        <Text>Set Stroke Color</Text>
      </TouchableHighlight>
    </View>
  );
};

export default PolylineColor;

const styles = StyleSheet.create({});
