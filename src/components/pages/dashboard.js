import React, { Component } from 'react';
var Infinite = require(react-infinite);
import ConvoCard from "../ConvoCard";
import NavBar from "../NavBar";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavBar/>
        <Infinite displayBottomUpwards className="dashboard--cards">
        {/*array of <ConvoCard>*/}
        </Infinite>
      </div>
    );
  }
}

export default Dashboard;
