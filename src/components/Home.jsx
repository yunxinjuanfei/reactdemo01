import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        //定义数据
        this.state={
            name:'zhangsan',
            age:30
        };
    }

    render(){
        return (
            <div>
                你好react,我是home组件
            </div>
        )
        
    }
}

export default Home