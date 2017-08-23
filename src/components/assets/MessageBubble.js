import React from 'react';
import Avatar from './Avatar'
import Anime from '../../animate.js';
import Api from '../../api.js';
class MessageBubble extends React.Component {
constructor(){
	super();
	this.state = {
		avatar: ''
	}
}
_getUser = () => {
	Api.getMe(localStorage.token).then(res => res.body).then(user => {
		this.setState({avatar: user[0].avatarUrl})
	})
}
componentDidMount(){
	if(+this.props.user !== +localStorage.user){
	Anime.messageSlideMine();
	console.log('its mine')
}
//  	else {
//  		Anime.messageSlide();
//  	}
  	this._getUser();

 }
	render() {


		return(
			<div className='message-container'>

					<div className={+this.props.user === +localStorage.user ? "message-bubble--mine" : "message-bubble--yours"} id="message-bubble">
						<div className="message-bubble--flexbox">
							<Avatar className="message-bubble--avatar" image={this.state.avatar} />
							<p>{this.props.text}</p>

						</div>
					</div>
				</div>

		);
	}
}

export default MessageBubble;
