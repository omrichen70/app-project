import React from "react";
import { View, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const SelectOption = ({ options, defaultText }) => {
  return (
    <View>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        defaultButtonText={defaultText}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectOption;
