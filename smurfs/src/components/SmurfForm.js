import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getSmurf from "./actions/SmurfAction";
import axios from "axios";

const SmurfForm = ({ getSmurf, error }) => {
  const [newSmurf, setNewSmurf] = useState({});

  useEffect(getSmurf);

  const handleChanges = event => {
    event.preventDefault();
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
    console.log(newSmurf);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("this is in handleSubmit");

    console.log("smurf object", newSmurf);

    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
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
        <button type="submit">Add</button>
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

export default connect(mapStateToProps, { getSmurf })(SmurfForm);
