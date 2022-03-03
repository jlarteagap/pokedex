import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function Pokemon({ navigation, route }) {
  console.log(navigation, route);
  return (
    <SafeAreaView>
      <Text>Desde Pokemon...</Text>
    </SafeAreaView>
  );
}
