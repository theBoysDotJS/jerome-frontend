import React, { Component } from 'react';
// import Infinite from 'react-infinite';
import ConvoCard from "../elements/ConvoCard.js";
import NavBar from "../elements/NavBar.js";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <NavBar/>
		{/* SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE*/}

      </div>
    );
  }
}

export default Dashboard;

		//
        // <Infinite useWindowAsScrollContainer containerHeight={90} displayBottomUpwards className="dashboard--cards">
        // {/*array of <ConvoCard>*/}
        // </Infinite>
