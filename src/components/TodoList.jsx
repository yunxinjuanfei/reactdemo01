
import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            username:'111'
        }
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    setUserName=()=>{
        this.setState({
            username: "张三"
        })
    }
    render() { 
        return (  
            <div>
                <h2>双向数据绑定</h2>
                {/* model改变影响View view改变反过来影响model */}
                {/* mvvm */}
                <input type="text" onChange={this.inputChange} value={this.state.username}/>
                <br /> <br />
                {this.state.username}
                <br /> <br />
                <button onClick={this.setUserName}>改变username的值</button>
            </div>
        );
    }
}
 
export default TodoList;