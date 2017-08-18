import React from 'react';
import Api from '../../api';


class CreateConvo extends React.Component {
  _submit = (e) => {
    e.preventDefault();
    console.log('hey dude')
    this.props.close();
    Api.createRoom(this.refs.name.value, localStorage.user, localStorage.token)
      .then(data => {
        console.log(data, 'here it is')
          Api.joinRoom(this.refs.friendInput.value, localStorage.token );
      })

  }
	render() {
		return(
			<section id="settings" className={this.props.isOpen === true ? "window-show" : "window-hide"} >
      <button onClick={this.props.close}>x</button>
      <h2>Create a Conversation</h2>
        <form onSubmit={e => this._submit(e)}>
        <input ref="name" placeholder="name" type="text"/>
        <input ref="friendInput" placeholder="who do you want to chat with?" type="text"/>
        <button type="submit">create!</button>
        </form>

      </section>
		);
	}
}

export default CreateConvo;
