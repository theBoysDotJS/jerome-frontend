import React, { Component } from 'react';
// var md5 = require('md5');

class Avatar extends Component {
  render() {
    // var url = `https://www.gravatar.com/avatar/${md5(this.props.user.email)}?d=wavatar`
    return (
      <div className="avatar">
      	<img alt="avatar" src={this.props.user.avatarUrl}/>
      </div>
    );
  }
}

export default Avatar;


// `https://www.gravatar.com/avatar/${hash}?d=wavatar`
