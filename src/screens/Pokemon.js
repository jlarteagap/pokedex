/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Stats from "../components/pokemon/Stats";
import Type from "../components/pokemon/Type";
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../components/pokemon/Favorite";
import useAuth from "../hooks/useAuth";
// doble destruction
export default function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();
  useEffect(() => {
    navigation.setOptions({
      // lado derecho de la pantalla
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);
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
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
