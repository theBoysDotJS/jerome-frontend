import React from 'react';
import LanguageForm from '../assets/LanguageForm.js';
import onClickOutside from 'react-onclickoutside'

class Settings extends React.Component {

	handleClickOutside = (e) => {
		if(this.props.isOpen){
			this.props.close(e)
		}
  }
	
	render() {
		console.log(this.props, 'setting props')
		return(
			<section id="settings" className={this.props.isOpen === true ? "window-show" : "window-hide"} >
				<ul>
					<li className="settings--language">
						<p>Change Language</p>
						<LanguageForm />
					</li>
					<li className="settings--notifications">
						<div>
							<p>Notifications</p>
						</div>
					</li>
					<li className="settings--sounds">
						<div>
							<p>Sounds</p>
						</div>
					</li>
				</ul>
				<p onClick={e => this.props.close(e)}>Close Settings</p>
				<p onClick={e => this.props.logout(e)}>Logout :(</p>
			</section>
		);
	}
}

export default onClickOutside(Settings);
