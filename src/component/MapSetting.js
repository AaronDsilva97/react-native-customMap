import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RadioButton from "./RadioButton";
import Segmented from "./Segmented";
import PolylineColor from "./PolylineColor";

const mapType = [
  { mapType: "standard" },
  { mapType: "hybrid" },
  { mapType: "mutedStandard" },
  { mapType: "satellite" },
  { mapType: "terrain" },
  { mapType: "none" },
];

const MapSetting = ({
  modalVisible,
  setModalVisible,
  setMapType,
  setCustomMapStyle,
  setStrokeColor,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Map Setting</Text>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close" size={36} color="black" />
            <Text>Hide</Text>
          </Pressable>
          <Segmented setMapType={setMapType} mapType={mapType} />
          <RadioButton setCustomMapStyle={setCustomMapStyle} />
          <PolylineColor setStrokeColor={setStrokeColor} />
        </View>
      </View>
    </Modal>
  );
};

export default MapSetting;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
