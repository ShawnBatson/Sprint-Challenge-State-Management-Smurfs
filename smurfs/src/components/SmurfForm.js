import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getSmurf from "./actions/SmurfAction";
import { bindActionCreators } from "redux";
import axios from "axios";

const SmurfForm = ({ getSmurf, error }) => {
  const [newSmurf, setNewSmurf] = useState({});

  useEffect(getSmurf);

  const handleChanges = event => {
    event.preventDefault();
    setNewSmurf(event.target.value);
    console.log(newSmurf);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const smurf = {
      name: event.target.name,
      age: event.target.age,
      height: event.target.height
    };

    axios.post("http://localhost:3333/smurfs", { smurf }).then(res => {
      console.log("this is in the POST call", res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChanges} />

        <label>Age:</label>
        <input type="text" name="age" onChange={handleChanges} />

        <label>Height:</label>
        <input type="text" name="height" onChange={handleChanges} />
      </form>
      <button type="submit">Add</button>
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

export default connect(mapStateToProps, { getSmurf })(SmurfForm);
