import React from 'react';

class LanguageForm extends React.Component {

	render() {
		return (
			<select onChange={e => this.props.language(e, this.menu.value)} name="languageForm" id="langaugeForm" ref={(input) => this.menu = input}>
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
		)
	}
}

export default LanguageForm;
