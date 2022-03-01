import React from "react";
import { StyleSheet, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemontList }) => {
  return (
    <FlatList
      data={pokemontList}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
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
