import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../misc/colors";

const SearchBar = ({ containerStyle }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput style={styles.searchBar} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {},
});

export default SearchBar;
