
import React, { Component } from 'react';
import Avatar from '../assets/Avatar.js';
import {Link} from 'react-router';
import Anime from '../../animate.js';
import {browserHistory} from 'react-router';
class ConvoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersInChat: []
		}
	}
	componentDidMount(){

	}

	_cardSwipe = (e) => {
		let cardCallBack = function(){
			setTimeout(function(){ browserHistory.push(`/conversation/${this.props.convoId}`)}.bind(this), 500)
		}
		e.preventDefault();
		Anime.cardSwipe(cardCallBack.bind(this));
		Anime.titleSwipe();

	}
	//This component renders a square card with information about the chatroom that it links to
	render() {
		return(
			<Link onClick={this._cardSwipe}to={`/conversation/${this.props.convoId}`} className="convo-card">
				<div className="convo-card--header" >
					<h3>{this.props.name}</h3>
					<ul className="convo-card--avatars">
						{this.props.users.map(user => {
							return(
								<Avatar image="{user.avatarUrl}"/>
							)
						})}
					</ul>
				</div>
				<div className="convo-card--snippet">
					{this.props.message.map(message => {
						return(<p><strong>{message.author}:</strong>{message.message}</p>)
					})}
				</div>
			</Link>
		);
	}
}

export default ConvoCard;


/*
These are optional flags that we can add to give context to the chatroom
<div className="flags">
	<div className="flag-1"></div>
	<div className="flag-2"></div>
	<div className="flag-3"></div>
</div>

*/
