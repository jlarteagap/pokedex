/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
// doble destruction
export default function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemon.order, pokemon.types);
  // Se ejecutara cada vez que params se moficado.

  useEffect(() => {
    // Funcion anonima auto ejecutable
    // tiene dos parentesis desde el principio. () => {}()
    (async () => {
      try {
        const res = await getPokemonDetailsApi(params.id);
        setPokemon(res);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  // solo renderizara cuando exista algo en el state.
  if (!pokemon) return null;
  return (
    <ScrollView>
      <Text>Hola</Text>
      {/* <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].from_default}
      /> */}
    </ScrollView>
  );
}
