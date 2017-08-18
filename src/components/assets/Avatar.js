import React from 'react';

// var md5 = require('md5');

class Avatar extends React.Component {
  render() {
	console.log(this.props.image, 'inside the avatar obj')
    return (
      <div className="avatar">
      	<img className="avatar--image" alt="avatar" src={this.props.image}/>
      </div>
    );
  }
}

export default Avatar;


// URL
//`https://www.gravatar.com/avatar/${hash}?d=wavatar`
