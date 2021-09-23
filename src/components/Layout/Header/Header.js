import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton showCart={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src="/assets/meals.jpg" alt="backdrop" />
      </div>
    </Fragment>
  );
};

export default Header;
