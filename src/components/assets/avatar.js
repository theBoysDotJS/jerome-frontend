import React, { Component } from 'react';


class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
      	<img alt="avatar" href="avatarURL"/>
      </div>
    );
  }
}

export default Avatar;


// `https://www.gravatar.com/avatar/${hash}?d=wavatar`
