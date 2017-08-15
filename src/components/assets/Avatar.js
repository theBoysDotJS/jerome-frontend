import React, { Component } from 'react';

// var md5 = require('md5');

class Avatar extends Component {
  render() {
    // var url = `https://www.gravatar.com/avatar/${md5(this.props.user.email)}?d=wavatar`
    return (
      <div className="avatar">
      	<img className="avatar--image" alt="avatar" src="http://www.unsplash.it/48"/>
      </div>
    );
  }
}

export default Avatar;


// URL
//`https://www.gravatar.com/avatar/${hash}?d=wavatar`
