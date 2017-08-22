import React from 'react';
import Api from '../../api.js';

class LanguageForm extends React.Component {
	constructor() {
		super()
		this.state = {
			value : ''
		}
	}

	change = (e) => {
		this.setState({ value : e.target.value });
		if(localStorage.token) {
			this.saveUserLanguage(e.target.value);
		}
		else {
			this.props.language(e, e.target.value)
		}
		console.log(this.state, 'language form state')
	}

	saveUserLanguage = (lang) => {


		 var x = Api.changeLanguage(localStorage.token, lang)
		.then(result => {
			console.log("result: ", result)
			window.location.reload()
		})
		.catch(err => {
			console.log(err)
		})
	}

	render() {
		var lang = 'en';
		if (this.props.user && this.props.user.language) {
			lang = this.props.user.language
		} else {
			lang = 'en'
		}

		console.log(">>>>>>>>>>", this.state.value)
		return (
			<div>
				<select onChange={this.change}  value={this.state.value} name="languageForm" id="langaugeForm">
					<option value="en">English</option>
					<option value="fr">French</option>
					<option value="es">Spanish</option>
					<option value="pt">Portugese</option>
					<option value="de">German</option>
					<option value="it">Italian</option>
					<option value="hi">Hindi</option>
					<option value="ar">Arabic</option>
					<option value="ru">Russian</option>
				</select>
			</div>
		)
	}
}

export default LanguageForm;
