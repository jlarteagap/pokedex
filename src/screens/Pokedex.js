import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsAPi, getPokemonDetailsByUrl } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsAPi()
      .then(async (res) => {
        const pokemonsArray = [];

        for await (const pokemon of res.results) {
          const pokemonDetail = await getPokemonDetailsByUrl(pokemon.url);

          pokemonsArray.push({
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            type: pokemonDetail.types[0].type.name,
            order: pokemonDetail.order,
            image:
              pokemonDetail.sprites.other["official-artwork"].front_default,
          });
        }

        setPokemons([...pokemons, ...pokemonsArray]);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <SafeAreaView>
      <PokemonList pokemontList={pokemons} />
    </SafeAreaView>
  );
}
