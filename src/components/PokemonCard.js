import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function PokemonCard({ pokemon }) {
  const goToPokemon = () => {
    console.log(pokemon);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyle}>
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
    backgroundColor: "grey",
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
