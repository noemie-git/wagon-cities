/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import City from "./city";

import { setCities } from "../actions";
import cities from "../cities";

class CityList extends Component {
  static defaultProps = {
    cities: [
      { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
      { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' }]
  }

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="list-group-item col-sm-7">
        {this.props.cities.map((city, index) => {
          return <City key={city.name} city={city} tabIndex={index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  // console.log(`Binding cities! ${setCities === undefined}}`);
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
