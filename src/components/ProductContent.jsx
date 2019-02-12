import React, { Component } from 'react';
//url模块来解析地址，在react中需要使用url模块需要安装； cnpm install url --save
import url from 'url'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    //生命周期函数中获取
    componentDidMount() {
        //get传值
        // console.log(url.parse(this.props.location.search,true)); //获取路由传值
        // var aid = url.parse(this.props.location.search, true).query.aid
        // console.log(aid)
        var query = url.parse(this.props.location.search, true).query
        console.log(query)
    }
    render() {
        return (
            <div>
                我是产品详情组件
            </div>
        );
    }
}

export default Content;