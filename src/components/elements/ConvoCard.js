import React, { Component } from 'react';
import Avatar from '../assets/Avatar.js';
import {Link} from 'react-router';

class ConvoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersInChat: []
		}
	}
	//This component renders a square card with information about the chatroom that it links to
	render() {
		return(
			<Link to={`/conversation/${this.props.convoId}`} className="convo-card">
				<div className="convo-card--header">
					<h3>{this.props.name}</h3>
					<ul>
						{this.state.usersInChat.map(user => {
							return(
								<Avatar image="{this.props.avatar}"/>
							)
						})}
					</ul>
				</div>
				<div className="convo-card--snippet">
					{this.props.message.map(message => {
						return(<p><strong>{message.author}:</strong>{message.text}</p>)
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
