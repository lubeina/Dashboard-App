const ADD_RESTAURANT = "ADD_RESTAURANT";
const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";
const GET_RESTAURANTS = "GET_RESTAURANTS";

import instance from "./instance";

export const getBakeryCount = (cuisine) => async (dispatch) => {
  instance.defaults.headers.common["user-key"] =
    "48d10c0aa09a9d6038b587b83aa53b4a";
  try {
    const res = await instance.get(`cuisines=5`);
    const posts = res.data;
    console.log("posts", posts.results_found);
    dispatch({
      type: GET_RESTAURANTS,
      payload: posts,
    });
  } catch (err) {
    console.log("error");
  }
};

let nextId = 0;
export const addRestaurant = (restaurant) => {
  return {
    type: ADD_RESTAURANT,
    payload: restaurant,
    id: nextId++,
  };
};

export const removeRestaurant = (restaurant) => {
  return {
    type: REMOVE_RESTAURANT,
    payload: restaurant,
  };
};
