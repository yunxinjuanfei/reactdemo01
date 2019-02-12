
import React, { Component } from 'react';

class Home extends Component{

    constructor(){
        super()
        //定义数据
        this.state={
            name:'zhangsan',
            age:30
        }
    }

    render(){
        return (<div>
            你好react,我是home组件
            <p>姓名:{this.state.name}</p>
            <p>年龄:{this.state.age}</p>
        </div>)
    }
}

export default Home