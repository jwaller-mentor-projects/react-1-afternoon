import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],

      userInput: "",
      filteredEmployees: []
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = userInput => {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(userInput)) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({ filteredEmployees: filteredEmployees });
  };

  render() {
    console.log(this.state.userInput);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.handleClick(this.state.userInput)}
        />
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredEmployees)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
