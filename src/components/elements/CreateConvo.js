import React from 'react';
import Api from '../../api';


class CreateConvo extends React.Component {
  _submit = (e) => {
    e.preventDefault();
    this.props.close
    Api.createRoom();
  }
	render() {
		return(
			<section id="settings" className={this.props.isOpen === true ? "window-show" : "window-hide"} >
      <button onClick={this.props.close}>x</button>
      <h2>Create a Conversation</h2>
        <form onSubmit={this._submit}>
        <input placeholder="name" type="text"/>
        <input placeholder="who do you want to chat with?" type="text"/>
        <button type="submit">create!</button>
        </form>

      </section>
		);
	}
}

export default CreateConvo;
