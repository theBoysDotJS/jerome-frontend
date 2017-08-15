import React, { Component } from 'react';
import Infinite from 'react-infinite';
import ConvoCard from "../elements/ConvoCard.js";
import NavBar from "../elements/NavBar.js";
import api from "../../api.js"


class Dashboard extends Component {
  constructor() {
	  super();
	  this.state = {
		  cardInfo: []
	  };
  }

  componentDidMount() {
	  this._fetchConvos();
  }

  _fetchConvos = () => {
	 api.getAllConvos(localStorage.token) //may need to be document.cookie
	 	.then(res => res.json())
		.then(cardData => {
			this.setState({
				cardInfo: cardData
			})
		})
  }

  render() {
	let convos = this.state.cardInfo
    return (
      <div className="dashboard">
		    <Infinite useWindowAsScrollContainer containerHeight={90} displayBottomUpwards className="dashboard--cards">
		     {convos.map(c => {
				 <ConvoCard
				 	avatars={this.state.cardInfo.users.AvatarUrl}
					name={this.state.cardInfo.name}
					message={this.state.cardInfo.messages} />
			 })}
		    </Infinite>
      </div>
    );
  }
}

export default Dashboard;


	//SET CONTAINER HEIGHT AND WINDOW SCROLL TO BYPASS RENDER ERROR, ONLY PLACEHOLDER VALUE
