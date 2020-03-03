import React, { Component } from 'react';
import{Demo,Demo2} from './index.js'

class Demofather extends Component {

  render() {
    return (
      <div className="App">
        <Demo title='待办事项' x={1}>
            今日事今日毕
        </Demo>
        <Demo2 btnText='add'/>
      </div>
    );
  }
}

export default Demofather