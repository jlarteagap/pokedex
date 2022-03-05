/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
// doble destruction
export default function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null);
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
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
    </ScrollView>
  );
}
