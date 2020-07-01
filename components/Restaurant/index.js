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

class RestaurantList extends Component {
  render() {
    const handlePress = () => this.props.navigation.navigate("Analytics");

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
                  onPress={handlePress}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
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
