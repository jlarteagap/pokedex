import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Account, Pokedex, Favorite } from "../screens/";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Pokedex}
        name="Pokedex"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => {
            <Icon name="heart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen component={Favorite} name="Favorite" />
      <Tab.Screen
        component={Account}
        name="Account"
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => {
            <Icon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
