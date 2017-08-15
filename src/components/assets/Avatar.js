import React, { Component } from 'react';


class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
      	<img className="avatar--image" alt="#" src="http://unsplash.it/48/48"/>
      </div>
    );
  }
}

export default Avatar;

// URL
//`https://www.gravatar.com/avatar/${hash}?d=wavatar`
