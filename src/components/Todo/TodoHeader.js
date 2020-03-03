import React, { Component } from 'react';

export default class TodoHeader extends Component {
  render() {
    console.log(this.props) //{title: "待办事项", children: "今日事今日毕"}
    return (
      <div> 
        <h1>{this.props.title}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}