import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./routes";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        {Routes.map((route) => (
          <Tab.Screen name={route.name} component={route.component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
