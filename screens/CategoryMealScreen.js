import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");

  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
