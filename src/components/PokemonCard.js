import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import getColorPokemonType from "../utils/getColorPokemonType";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();

  const pokemonColor = getColorPokemonType(pokemon.type);
  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    // Navigation solo envia datos planos
    // No envia objetos o funciones
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  image: {
    width: 90,
    height: 90,
  },
});
