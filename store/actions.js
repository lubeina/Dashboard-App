const ADD_RESTAURANT = "ADD_RESTAURANT";
const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";
const GET_BAKERY = "GET_BAKERY";
const GET_AMERICAN = "GET_AMERICAN";
const GET_ASIAN = "GET_ASIAN";
const GET_FASTFOOD = "GET_FASTFOOD";

import instance from "./instance";

export const getBakeryCount = (cuisine) => async (dispatch) => {
  instance.defaults.headers.common["user-key"] =
    "48d10c0aa09a9d6038b587b83aa53b4a";
  try {
    const res = await instance.get(`&entity_type=city&cuisines=${cuisine}`);
    const posts = res.data;
    dispatch({
      type: GET_BAKERY,
      payload: posts,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAmericanCount = (cuisine) => async (dispatch) => {
  instance.defaults.headers.common["user-key"] =
    "48d10c0aa09a9d6038b587b83aa53b4a";
  try {
    const res = await instance.get(`&entity_type=city&cuisines=${cuisine}`);
    const posts = res.data;
    dispatch({
      type: GET_AMERICAN,
      payload: posts,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAsianCount = (cuisine) => async (dispatch) => {
  instance.defaults.headers.common["user-key"] =
    "48d10c0aa09a9d6038b587b83aa53b4a";
  try {
    const res = await instance.get(`&entity_type=city&cuisines=${cuisine}`);
    const posts = res.data;
    dispatch({
      type: GET_ASIAN,
      payload: posts,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFastFoodCount = (cuisine) => async (dispatch) => {
  instance.defaults.headers.common["user-key"] =
    "48d10c0aa09a9d6038b587b83aa53b4a";
  try {
    const res = await instance.get(`&entity_type=city&cuisines=${cuisine}`);
    const posts = res.data;
    dispatch({
      type: GET_FASTFOOD,
      payload: posts,
    });
  } catch (err) {
    console.log(err);
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
