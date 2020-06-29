import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Index from "./Index";
import HogDeetz from "./HogDeetz";

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      currentPage: "index",
      viewingHog: {},
      filter: "all"
    }
  }

  onHogClick = (hog) => {
    this.setState( {...this.state.viewingHog, ...this.state.currentPage, viewingHog: hog, currentPage: "hog_deetz" } )
  }

  onNavClick = () => {
    this.setState( { ...this.state.currentPage, ...this.state.filter, currentPage: "index", filter: "all"} )
  }

  onFilterChanged = (e) => {
    this.setState( { ...this.state.filter, filter: e.target.value} )
  }

  render() {
    return (
      <div className="App">
        <Nav onNavClick={this.onNavClick}/>
        {
        this.state.currentPage == "index" ? 
          <Index filter={this.state.filter} hogs={this.state.hogs} onHogClick={this.onHogClick} onFilterChanged={this.onFilterChanged} /> :
          <HogDeetz hog={this.state.viewingHog} />
        }
      </div>
    );
  }
}

export default App;