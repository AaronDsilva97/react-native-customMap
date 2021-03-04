import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Night } from "../custom/Night";
import { Retro } from "../custom/Retro";
import { Aubergine } from "../custom/Aubergine";

const RadioButton = ({ setCustomMapStyle }) => {
  const [radioSelected, setRadio] = React.useState(1);
  const products = [
    {
      id: 1,
      name: "Retro",
      custom: Retro,
    },
    {
      id: 2,
      name: "Night",
      custom: Night,
    },
    {
      id: 3,
      name: "Aubergine",
      custom: Aubergine,
    },
  ];
  return products.map((val) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        key={val.id}
        onPress={() => {
          setRadio(val.id);
          setCustomMapStyle(val.custom);
        }}
      >
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {val.id == radioSelected ? (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#000",
              }}
            />
          ) : null}
        </View>
        <Text style={{ paddingLeft: 10 }}>{val.name}</Text>
      </TouchableOpacity>
    );
  });
};

export default RadioButton;

const styles = StyleSheet.create({});
