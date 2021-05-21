import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRestaurants,
  // removeRestaurant,
  // selectTotalRestaurants,
  // selectAllRestaurants
} from "./restaurantsSlice";
// import styles from "./RestaurantsList.module.css";

export default function RestaurantsList() {
  // const count = useSelector(selectTotalRestaurants);
  // const restaurants = useSelector(selectAllRestaurants);
  // const restaurantsLoading = useSelector(state => state.restaurants.loading);
  const dispatch = useDispatch();

  return (
    <div></div>
  )
}
