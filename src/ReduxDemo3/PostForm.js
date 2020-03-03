import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createPost} from '../Store3/actions/postActions'

 class PostForm extends Component {
     constructor(props){
         super(props)
         this.state={
            title:'',
            body:''
         }
         this.onSubmit= this.onSubmit.bind(this)
         this.onChange = this.onChange.bind(this)
     }
    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title</label>
                        <br/>
                        <input type="text" name='title' onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <div>
                        <label>body</label>
                        <br/>
                        <textarea name="body" onChange={this.onChange}
                            value={this.state.body}
                        ></textarea>
                    </div>
                    <button type='submit'>添加</button>
                </form>
            </div>
        )
    }

    onChange(e){
        // console.log('e.target.name',e.target.name)
        // console.log('e.target.value',e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const post = {
            title:this.state.title,
            body:this.state.body
        }
        //调用action中的方法 需要将视图上用户输入的参数传给store
        this.props.createPost(post)
        this.setState({
            title:'',
            body:''
        })
        
    }
}

export default  connect(null,{createPost})(PostForm)
