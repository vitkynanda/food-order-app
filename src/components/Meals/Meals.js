import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummarry from "./MealsSummarry";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummarry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
