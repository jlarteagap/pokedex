import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const PokemonList = ({ pokemontList }) => {
  return (
    <FlatList
      data={pokemontList}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});

export default PokemonList;
