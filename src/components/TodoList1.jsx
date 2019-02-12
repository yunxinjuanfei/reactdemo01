
import React from 'react';

class TodoList1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        }
    }
    //增加
    addDate=()=>{
        // alert(this.refs.title.value)
        var tempList = this.state.list;
        tempList.push(this.refs.title.value); //返回值是一个索引值
        this.refs.title.value='';//input变为空
        this.setState({
            list: tempList
        })
    }
    //删除
    removeDate=(key)=>{
        // alert(key)
        var tempList = this.state.list;
        tempList.splice(key,1)
        this.setState({
            list: tempList
        })
    }
    render() { 
        return ( 
            <div>
                <h2>react tudolist案例演示</h2>
                <input ref="title"/><button onClick={this.addDate}>增加</button>
                <hr/>
                <ul>
                    {
                        // 用到this要注意用箭头函数
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value}  ----- <button onClick={this.removeDate.bind(this,key)}>删除</button></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}
 
export default TodoList1;