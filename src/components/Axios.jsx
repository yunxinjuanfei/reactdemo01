
import React, { Component } from 'react';
import axios from 'axios';


class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        }
    }
    getDate=()=>{
        //通过axios获取数据
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';   //接口后台允许了跨域
        axios.get(api)
            .then((response)=> {
                console.log(response.data.result);
                //用到this需要注意this指向
                this.setState({
                    list: response.data.result
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() { 
        return (  
            <div>
                <h2>axios获取组件数据</h2>
                <button onClick={this.getDate}>获取api接口数据</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Axios;