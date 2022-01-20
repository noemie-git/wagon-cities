import React from "react";
import City from "./city";
import { connect } from "react-redux";

import { selectedCity } from "../actions";

const Activecity = () => {
  componentWillMount() {
    this.props.selectedCity(city);
  }

  if (props.selectedCity) {
    return (
      <div className="col-sm-5" >
        <City />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    city: state.city
  };
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
