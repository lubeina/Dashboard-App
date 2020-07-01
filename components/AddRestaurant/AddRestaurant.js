import React, { Component } from "react";

// Style Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { Spinner } from "native-base";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class AddRestaurant extends Component {
  state = {
    name: "",
    location: "",
    cuisine: "",
  };
  handlePress = () => {
    this.props.navigation.navigate("RestaurantList");
    this.props.handleAdd(this.state);
  };
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Restaurant Details</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Restaurant Name"
          placeholderTextColor="#A6AEC1"
          onChangeText={(value) => this.setState({ name: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Location"
          placeholderTextColor="#A6AEC1"
          onChangeText={(value) => this.setState({ location: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Cuisine"
          placeholderTextColor="#A6AEC1"
          onChangeText={(value) => this.setState({ cuisine: value })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => this.handlePress()}
        >
          <Text style={styles.authButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddRestaurant.navigationOptions = {
  title: "Add Restaurant",
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (restaurant) => {
      dispatch(actionCreators.addRestaurant(restaurant)),
        console.log("restaurant", restaurant);
    },
  };
};

export default connect(null, mapDispatchToProps)(AddRestaurant);
