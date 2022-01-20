/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {
    const props = this.props;
    if (props.selectedCity !== undefined && props.selectedCity !== null) {
      return (
        <div className="col-sm-8">
          <h3>{props.selectedCity.name}</h3>
          <p>{props.selectedCity.address}</p>
          <div>
            <img src={`https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`} alt="" width="100%" />
          </div>
        </div>
      );
    }
    return (<div className="active-city">
      <p>Select a city...</p>
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
