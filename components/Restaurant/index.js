import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

// Style Components
import {
  List,
  Content,
  Container,
  Card,
  Text,
  View,
  ListItem,
  Body,
  Right,
} from "native-base";
import styles from "./styles";

import * as actionCreators from "../../store/actions";

import AddButton from "../Buttons/AddButton";
import DashboardButton from "../Buttons/DashboardButton";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.onStart();
  }
  render() {
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Text style={styles.headerText}>Restaurants</Text>
          <List>
            {this.props.restaurants.map((restaurant) => (
              <Card key={restaurant.id}>
                <View style={styles.overlay} />
                <ListItem
                  key={restaurant.id}
                  transparent
                  thumbnail
                  button
                  style={styles.listitem}
                >
                  <Body transparent>
                    <Text style={styles.text}>{restaurant.name}</Text>
                    <Text
                      note
                      numberOfLines={2}
                      style={{ color: "black", fontSize: 12 }}
                    >
                      {restaurant.location}
                      {"\n"}
                      {restaurant.cusine}
                    </Text>
                  </Body>
                  <Right>
                    <Ionicons
                      name="md-trash"
                      style={{ paddingRight: 15 }}
                      size={25}
                      onPress={() => this.props.handleRemove(restaurant)}
                    />
                  </Right>
                </ListItem>
              </Card>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
RestaurantList.navigationOptions = {
  title: "MishiPay",
  backgroundColor: "snow",
  titleColor: "black",
  headerRight: () => <AddButton />,
  headerLeft: () => <DashboardButton />,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStart: () => {
      dispatch(actionCreators.getBakeryCount(5));
      dispatch(actionCreators.getAmericanCount(1));
      dispatch(actionCreators.getAsianCount(3));
      dispatch(actionCreators.getFastFoodCount(40));
    },
    handleRemove: (restaurant) =>
      dispatch(actionCreators.removeRestaurant(restaurant)),
  };
};
const mapStateToProps = (state) => {
  return {
    restaurants: state.reducers.restaurants,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
