import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    const props = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/${props.city.slug}')`
    };

    let containerClasses = "city card-container";
    if (this.props.city === this.props.selectedCity) {
      containerClasses += " selected";
    }
    return (
      <div className={containerClasses} onClick={this.handleClick} role="link" tabIndex={this.props.tabIndex + 1}>
        <div className="card">
          <div className="card-description">
            <h3>{props.city.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
