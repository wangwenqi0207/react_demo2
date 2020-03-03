import React, { Component } from 'react'
import { connect } from 'react-redux';
import {conutAdd} from '../Store3/actions/countActions'


class Counter extends Component {
    render() {
        console.log('this.props.num',this.props.num)
        return (
            <div>
                我是第二个reducer
                <p>{this.props.num}</p>
                <button onClick={this.props.conutAdd}>点击加</button>
            </div>
        )
    }
}

const mapStateToProps =state=>({
    num:state.counter
})

export default connect(mapStateToProps,{conutAdd})(Counter)
