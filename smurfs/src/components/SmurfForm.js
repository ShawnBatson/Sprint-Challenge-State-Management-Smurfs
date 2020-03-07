import React from "react";
import { connect } from "react-redux";
import getSmurf from "./actions/SmurfAction";

const SmurfForm = ({ getSmurf, isFetching, error }) => {
  if (isFetching) {
    return <hs>I'm gettin' it</hs>;
  }

  if (error) {
    return <h2>{error} </h2>;
  }

  return (
    <div>
      <form>
        <label>Name:</label>
        <input />

        <label>Age:</label>
        <input />

        <label>Height:</label>
        <input />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default SmurfForm;
