import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';



//引入home
import Home from './components/Home'
import News from './components/News'
import Product from './components/Product'
import ProductContent from './components/ProductContent'
import Content from './components/Content'
// import Nefg from './components/Nefg'
// import List from './components/List'
// import TodoList from './components/TodoList'
// import TodoList1 from './components/TodoList1'
// import TodoList2 from './components/TodoList2'
// import Axios from './components/Axios'
// import Fetch from './components/Fetch'

class App extends Component {
    //模板 jsx语法
    //exact严格匹配
    render() {
        return ( 
            <Router >
                <div>
                    <Link to = "/"> 主页 </Link> 
                    <Link to = "/news"> 新闻 </Link> 
                    <Link to = "/product"> 产品 </Link> 
                    <hr / >

                    <Route exact path = "/" component = { Home }/> 
                    <Route path = "/news" component = { News }/> 
                    <Route path = "/product" component = { Product }/> 
                    <Route path = "/productcontent" component = { ProductContent }/> 
                    <Route path = "/content/:aid" component = { Content }/> 
                </div> 
            </Router>
        );
    }
}

export default App;