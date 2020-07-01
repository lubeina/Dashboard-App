import { createStackNavigator } from "react-navigation-stack";

// Components
import RestaurantList from "../components/Restaurant";
import Analytics from "../components/Dashboard/Analytics";
import AddRestaurant from "../components/AddRestaurant/AddRestaurant";

const AppNav = createStackNavigator(
  {
    RestaurantList: RestaurantList,
    Analytics: Analytics,
    AddRestaurant: AddRestaurant,
  },
  {
    initialRouteName: "RestaurantList",
  }
);

export default AppNav;
