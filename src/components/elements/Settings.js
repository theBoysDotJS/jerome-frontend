import React from 'react';
import LanguageForm from '../assets/LanguageForm.js';

class Settings extends React.Component {
	render() {
		console.log(this.props, 'setting props')
		return(
			<section id="settings" className={this.props.isOpen === true ? "window-show" : "window-hide"} >
			<strong>Your Id: {this.props.id}</strong>
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

export default Settings;
