import React, { Component } from "react";

class Index extends Component {

    filteredHogs = () => {
        let filter = this.props.filter
        switch(filter) {
            case "greased":
                return this.props.hogs.filter(hog => hog.greased)
            case "name":
                return this.props.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
            case "weight":
                return this.props.hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
            default:
                return this.props.hogs
        }
    }

  render() {
    return (
        <div>

            <div className="ui container">
                <select name="type" id="type" value={this.props.filter} onChange={this.props.onFilterChanged}>
                    <option value="all">all</option>
                    <option value="greased">greased</option>
                    <option value="name">name</option>
                    <option value="weight">weight</option>
                </select>
            </div>


            <div className="ui grid container">
                {
                    this.filteredHogs().map(hog => {
                        let pigImage = require(`../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`)
                        return <div className="ui card">
                            <div className="image">
                                <img src={pigImage} />
                            </div>
                            <div className="content">
                                <a onClick={() => this.props.onHogClick(hog)} className="header">{hog.name}</a>
                            </div>
                            
                        </div>
                    })
                }
            </div>  

        </div>
    );
  }
}

export default Index;