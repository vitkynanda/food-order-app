import React from "react";
import classes from "./MealsSummarry.module.css";
const MealsSummarry = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delevired To You</h2>
      <p>
        Choose your favourite meals from our board selection of available meals
        and and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time of
        course by experienced chef.
      </p>
    </section>
  );
};

export default MealsSummarry;
