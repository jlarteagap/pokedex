import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";

export default function Favorite() {
  return (
    <SafeAreaView>
      <Text>Desde Favorite</Text>
    </SafeAreaView>
  );
}
