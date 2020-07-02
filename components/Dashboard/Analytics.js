import React, { Component } from "react";

// Style Components
import { Container, Text, Header } from "native-base";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
} from "victory-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import styles from "./styles";

class Analytics extends Component {
  data = [
    { x: "Bakery", y: this.props.bakery.results_found },
    { x: "Asian", y: this.props.asian.results_found },
    { x: "Fast Food", y: this.props.fast_food.results_found },
    { x: "American", y: this.props.american.results_found },
  ];
  render() {
    return (
      <Container>
        <Text style={styles.authTitle}>Cusines in New York </Text>
        <VictoryPie data={this.data} />
      </Container>
    );
  }
}
Analytics.navigationOptions = {
  title: "Analytics",
  backgroundColor: "snow",
  titleColor: "black",
};

const mapStateToProps = (state) => {
  console.log(state.rest_reducer.american.results_found);
  return {
    bakery: state.rest_reducer.bakery,
    american: state.rest_reducer.american,
    asian: state.rest_reducer.asian,
    fast_food: state.rest_reducer.fast_food,
  };
};

export default connect(mapStateToProps)(Analytics);
