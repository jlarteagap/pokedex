import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Account, Pokedex, Favorite } from "../screens/";
import Icon from "react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Pokedex}
        name="Pokedex"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color="#000" size="20" />
          ),
        }}
      />
      <Tab.Screen component={Favorite} name="Favorite" />
      <Tab.Screen component={Account} name="Account" />
    </Tab.Navigator>
  );
}
