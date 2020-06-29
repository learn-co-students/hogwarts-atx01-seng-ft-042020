import React, { Component } from "react";

class HogDeetz extends Component {
  render() {
    return (
       <div className="ui container">
           <p>Name: {this.props.hog.name}</p>
           <p>Specialty: {this.props.hog.specialty}</p>
           <p>Greased? {`${this.props.hog.greased}`}</p>
           <p>Weight: {this.props.hog.weight}</p>
           <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
       </div>
    );
  }
}

export default HogDeetz;