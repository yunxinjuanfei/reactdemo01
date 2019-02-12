
import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super()
        //定义数据
        this.state = {
            msg: '这是一条信息',
            username:''
        }
    }
    run=(event)=>{
        // console.log(event)
        // event.target.style.background='red'
        //获取dom属性
        // alert(event.target.getAttribute('aid'))
    }

    inputChage=(e)=>{
        // alert(111);
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }
    getInput = () => {
       alert(this.state.username)
    }

    render() {
        return (<div>
            <p>{this.state.msg}</p>
            <button  aid="111" onClick={this.run}>事件对象</button>
            <br /><br /><br />

            {/* 获取表单的值
            1.监听表单的改变事件
            2.在改变的事件里面获取表单输入的值
            3.把表单输入的值赋值给username
            4.点击按钮的时候获取state里面的username的值 */}
            <input type="text" onChange={this.inputChage}/>
            <button onClick={this.getInput}>获取input值</button>


        </div>)
    }
}

export default Home