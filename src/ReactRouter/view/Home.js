import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('Home',this.props.location.state)
    return (
      <div> 首页 </div>
    );
  }
}


export default Home
