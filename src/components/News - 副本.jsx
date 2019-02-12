
import React from 'react';

import pic from '../assets/images/logo.svg'
class News extends React.Component {

    constructor(props) {
        super(props) //用户父子组件传值，建议大家这么写
        //定义数据
        this.state = {
            userinfo:'新闻',
            list:['1111','2222','3333'],
            list2:[<h2>aaa</h2>,<h2>bbb</h2>],
            msg:'信息',
            massage:'这是信息内容',
            userame:'iyy'
        }

        //第二种改变this指向的方法
        this.getMassage = this.getMassage.bind(this)
    }
    //这是一个事件
    run(){
        alert('这是一个润')
    }

    getMsg(){
        alert(this.state.msg)
    }

    getMassage(){
        alert(this.state.massage)
    }

    getName=()=>{
        alert(this.state.userame)
    }

    //改变this值
    setDate=()=>{
        this.setState({
            msg:'改变了msg值'
        })
    }
    //this传值
    setName = (str) => {
        this.setState({
            userame: str
        })
    }



    render() {
        //循环一个li
        let listResult = this.state.list.map(function(value,key){
            return <li key={key}>{value}</li>
        })


        return(<div>
            <h2>{this.state.userinfo}</h2>
            <div><img src={pic} alt="" width='100' /><img src={require('../assets/images/logo.svg')} alt="" width='100' /></div>
            <ul>
                {listResult}
            </ul>
            <div>{this.state.userame}</div>
            <button onClick={this.run}>执行方法</button>
            <button onClick={this.getMsg.bind(this)}>获取数据第一种改变this只想的方法</button>
            <button onClick={this.getMassage}>获取数据第二种改变this只想的方法</button>
            <button onClick={this.getName}>获取数据第三种改变this只想的方法</button>
            <button onClick={this.setDate}>改变state的值</button>
            <button onClick={this.setName.bind(this,'李四')}>执行函数传值</button>
        </div>)
    }
}

export default News