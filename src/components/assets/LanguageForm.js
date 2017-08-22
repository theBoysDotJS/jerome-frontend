import React from 'react';

class LanguageForm extends React.Component {
	constructor() {
		super()
		this.state = {
			value : ''
		}
	}

	change = (e) => {
		this.setState({ value : e.target.value })
	}

	saveUserLanguage = (lang) => {
		fetch()
		.then()
		.catch()
	}

	render() {

		return (
			<div>
				<select onChange={this.change} value={this.state.value} name="languageForm" id="langaugeForm">
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
				<p>{this.state.value}</p>
			</div>
		)
	}
}

export default LanguageForm;
