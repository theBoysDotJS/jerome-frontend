import React from 'react';

// var md5 = require('md5');

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
      	<img className="avatar--image" alt="avatar" src={this.props.user.avatarUrl}/>
      </div>
    );
  }
}

export default Avatar;


// URL
//`https://www.gravatar.com/avatar/${hash}?d=wavatar`
