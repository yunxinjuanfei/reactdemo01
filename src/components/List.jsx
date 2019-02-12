
import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super()
        //定义数据
        this.state = {
            username: ''
        }
    }
   
    inputChage = (e) => {
        //给元素定义ref属性
       let val =this.refs.username.value;
       this.setState({
           username:val
       })
    }
    getInput = () => {
        alert(this.state.username)
    }
    //键盘事件
    inputKeyUp=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode==13){
            alert(e.target.value)
        }
    }
    render() {
        return (<div>
            <br /><br /><br />

            {/* 获取表单的值
            1.监听表单的改变事件
            2.在改变的事件里面获取表单输入的值
            3.把表单输入的值赋值给username
            4.点击按钮的时候获取state里面的username的值 */}
            <input type="text" onChange={this.inputChage} ref="username" />
            <button onClick={this.getInput}>获取input值</button>
            <br /><br /><br />
            <input onKeyUp={this.inputKeyUp}/>


        </div>)
    }
}

export default Home