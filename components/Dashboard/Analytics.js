import React, { Component } from "react";

// Style Components
import { Container, Text, Header } from "native-base";
import { LineChart } from "react-native-charts-wrapper";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Analytics extends Component {
  componentDidMount() {
    this.props.onStart();
  }
  bakery = this.props.analysis.results_found;

  data = [
    { restaurant: 1, earnings: 6755 },
    { restaurant: 2, earnings: 16500 },
    { restaurant: 3, earnings: 14250 },
    { restaurant: 4, earnings: 19000 },
  ];
  render() {
    console.log(this.bakery);
    return (
      <Container>
        <Text>Analytics</Text>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={this.data} x="quarter" y="earnings" />
        </VictoryChart>
      </Container>
    );
  }
}
Analytics.navigationOptions = {
  title: "MishiPay",
  backgroundColor: "snow",
  titleColor: "black",
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStart: () => {
      dispatch(actionCreators.getBakeryCount(5));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    analysis: state.rest_reducer.analysis,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
