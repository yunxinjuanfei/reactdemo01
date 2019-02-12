import React, { Component } from 'react';


// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';


//引入home
// import Home from './components/Home'
// import News from './components/News'
// import Nefg from './components/Nefg'
// import List from './components/List'
// import TodoList from './components/TodoList'
// import TodoList1 from './components/TodoList1'
// import TodoList2 from './components/TodoList2'
// import Axios from './components/Axios'
import Fetch from './components/Fetch'

class App extends Component {
    //模板 jsx语法
    render() {
        return ( <div className = "App">
            <Fetch / >
            </div>
        );
    }
}

export default App;