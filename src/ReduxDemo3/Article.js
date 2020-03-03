import React, { Component } from 'react'
import { connect } from 'react-redux';
//组件中触发action
import {fetchPosts} from '../Store3/actions/postActions'

class Article extends Component {
    componentDidMount(){
       this.props.fetchPosts() //执行action
    }
    //监听store中的newPost是否有数据，如果有就添加进数组
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.items.unshift(nextProps.newPost)
        }
        console.log('nextProps',nextProps)
    }

    render() {
        const dataItem = this.props.items
        return (
            <div>
                <h1>Posts</h1>
                {
                    dataItem.map(item=>{
                        return <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                        </div>
                })
                }
            </div>
        )
    }
}

const mapStateToProps =state=>({
    //state.posts是store中reducer集合的posts
    //items是reducer接收的新值
    items:state.posts.items,
    newPost:state.posts.newitems
})

export default connect(mapStateToProps,{fetchPosts})(Article) 