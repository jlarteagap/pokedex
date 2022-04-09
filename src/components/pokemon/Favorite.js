import React from "react";
import Icon from "react-native-vector-icons";
import { addPokemonFavoriteApi } from "../../api/favorite";

export default function Favorite({ id }) {
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
