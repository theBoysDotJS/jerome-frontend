import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router'
import Avatar from '../assets/Avatar.js';
import Settings from "./Settings.js"
import CreateConvo from "./CreateConvo.js"
import AddUser from "./addUser.js"
import Api from '../../api.js';
import Auth from '../../auth.js';

class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			inConvo: false,
			settingsOpen: false,
			createOpen: false,
			avatarReload: localStorage.token
		}
	}

	_getUser = () => {
		console.log(this.props.params, "look here at the params!!")
		Api.getMe(localStorage.token).then(res => res.body).then(user => {
			// console.log(user, 'user obj in getMe')
			this.setState({username: user[0].username, user_id: user[0].id, avatar: user[0].avatarUrl})
		})
	}


  _toggleSettings = (e) => {
	  e.preventDefault();
	//   console.log(this.state.settingsOpen)
	  this.setState({
		  settingsOpen: !this.state.settingsOpen
	  })
  }

	_toggleCreate = (e) => {
		e.preventDefault();
		// console.log(this.state.createOpen)
		this.setState({
			createOpen: !this.state.createOpen
		})
	}

	_logout = (e) => {
		e.preventDefault();

		Auth.logout().then(res => {
			if (res === true) {
				browserHistory.push('/login')
			}
		})

		this._toggleSettings(e);
		browserHistory.push('/login');
	}

	componentDidMount() {
		this._getUser();
		if(this.props.params.id){
			this.setState({
				inConvo: true
			})
		} else{
			this.setState({
				inConvo: false
			})
		}

		if(this.state.inConvo){
			this.setState({
				convoname: "chat"
			})

	}
}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps, "the next props")
			if(!!nextProps.params.id){
				console.log("look here guys")
				this.setState({
					inConvo: true,
					convoname: 'chat'
				})
			} else if(nextProps.params.id === {}){
				this.setState({
					inConvo: false,
					convoname: false
				})
			}

		}



	render() {
		return (
			<nav className="nav-bar">
				<div className="nav-bar--flex">

		  	<Link to={'/'}>
	        	<img className="nav-bar--logo" src="/logo.svg" alt="some kind of thing"/>
			</Link>
		</div>

		<div className="nav-bar--flex nav-bar--center">
        	<h1 className="nav-title">{this.state.convoname ? this.state.convoname : 'Home'}</h1>
		</div>

		{!!Auth.isLoggedIn() ?

		<div className="nav-bar--flex nav-bar--user-card">
			<div>
		      <p onClick={e => this._toggleSettings(e)}>{this.state.username}</p>
			</div>
	        <Avatar image={this.state.avatar}/>
          <p onClick={e => this._toggleCreate(e)}>+</p>

						{<Settings id={this.state.user_id} close={this._toggleSettings} isOpen={this.state.settingsOpen} logout={this._logout}/>}
						{this.state.convoname ? <AddUser close={this._toggleCreate} isOpen={this.state.createOpen} /> :
							<CreateConvo close={this._toggleCreate} isOpen={this.state.createOpen}/>}

			</div>

			: null}
			</nav>

		);
	}
}

export default NavBar;
