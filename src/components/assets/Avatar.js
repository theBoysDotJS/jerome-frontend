import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
      	<img className="avatar--image" alt="avatar" src={this.props.image}/>
      </div>
    );
  }
}

export default Avatar;
