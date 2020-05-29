import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Platform } from "react-native";

import Colors from "../constants/colors";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MeanDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoryScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: " SCREEN",
    },
  }
);

export default createAppContainer(MealsNavigator);
