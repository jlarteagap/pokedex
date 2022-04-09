import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavoriteApi() {
  try {
    const res = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = [];
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
  }
}
