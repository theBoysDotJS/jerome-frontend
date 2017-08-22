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
		return(
			<section id="settings" className={this.props.isOpen === true ? "window-show" : "window-hide"} >
        <strong>Your Id: {this.props.id}</strong>
				<h2>Settings</h2>
				<div className="language-wrap">
					<p className="lang-headline">Change Language</p>
					<LanguageForm />
				</div>
				<form className="convo-form">
					<div className="form--button-container">
						<button className="close-convo form--button" onClick={e => this.props.logout(e)}>logout</button>
						<button className="close-convo form--button" onClick={this.props.close}>close</button>

					</div>
				</form>

			</section>
		);
	}
}

export default onClickOutside(Settings);
