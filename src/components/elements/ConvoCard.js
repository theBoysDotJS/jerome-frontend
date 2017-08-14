import React, { Component } from 'react';

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
			<section className="convo-card">
				<div className="convo-card--header">
					<h3>Chat Name</h3>
					<ul>
						{this.state.usersInChat.map(user => {
							return(
								<Avatar image={}/>
							)
						})}
					</ul>
				</div>
				<div className="convo-card--snippet">
					{this.state.messageSnippet.map(message => {
						return(<p><strong>{message.handle}:</strong>{message.text}</p>)
					})}
				</div>
			</section>
		);
	}
}

/*
These are optional flags that we can add to give context to the chatroom


<div className="flags">
	<div className="flag-1"></div>
	<div className="flag-2"></div>
	<div className="flag-3"></div>
</div>

*/