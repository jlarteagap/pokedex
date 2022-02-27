import React from "react";
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {Account, Pokedex, Favorite} from '../screens/'
const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen component={Pokedex} name="Pokedex" />
            <Tab.Screen component={Favorite} name="Favorite" />
            <Tab.Screen component={Account} name="Account" />
        </Tab.Navigator>
    )
}