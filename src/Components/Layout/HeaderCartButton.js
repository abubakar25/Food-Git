import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </div>
  );
}

export default HeaderCartButton;
