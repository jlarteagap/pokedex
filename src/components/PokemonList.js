import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemontList, loadPokemons, isNext }) => {
  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemontList}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      // Cuando queramos hacer un infinite scrollEnabled, estas dos funciones haran ese trabajo
      onEndReached={isNext && loadMore}
      // Arriba: preguntamos si isNext es nulo deje de cargar
      onEndReachedThreshold={0.1}
      // para el loading spinner
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={styles.spinner} />
      }
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 15,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default PokemonList;
