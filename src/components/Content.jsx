import React, { Component } from 'react';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    //生命周期函数中获取
    componentDidMount(){
        console.log(this.props.match.params.aid); //获取动态路由传值
    }
    render() { 
        return (  
            <div>
                我是新闻详情组件
            </div>
        );
    }
}
 
export default Content;