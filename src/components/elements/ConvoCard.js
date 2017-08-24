
import React from 'react';
import Avatar from '../assets/Avatar.js';
import {Link} from 'react-router';
import Anime from '../../animate.js'

class ConvoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersInChat: []
		}
	}
	componentDidMount(){

	}

	
	//This component renders a square card with information about the chatroom that it links to
	render() {
		return(
			<Link to={`/conversation/${this.props.convoId}`} className="convo-card">
				<div className="convo-card--header" >
					<h3>{this.props.name}</h3>
					<ul className="convo-card--avatars">
						{this.props.users.map(user => {
							return(
								<Avatar image={user.avatarUrl}/>
							)
						})}
					</ul>
				</div>
				<div className="convo-card--snippet">
					{this.props.message.map(message => {
						return(<p><strong>{message.username}:</strong>{message.message_body}</p>)
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
