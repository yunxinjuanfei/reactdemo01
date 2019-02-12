
import React from 'react';
class TodoList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    title:'录制1',
                    checked:true
                },
                {
                    title: '录制2',
                    checked: false
                },
                {
                    title: '录制3',
                    checked: false
                },
                {
                    title: '录制4',
                    checked: false
                }
            ]
        }
    }
    render() { 
        return ( 
            <div>
                <input ref="title"/>
                <h2>待办事项</h2>
                <hr/>
                {
                    // eslint-disable-next-line array-callback-return
                    this.state.list.map(function(value,key){
                        if(!value.checked){
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked}/>
                                    {value.title}
                                    ----<button>删除</button>
                                </li>
                            )
                        }
                    })
                }

                <h2>已完成事项</h2>
                {
                    // eslint-disable-next-line array-callback-return
                    this.state.list.map(function (value,key) {
                        if (value.checked) {
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} />
                                    {value.title}
                                    ----<button>删除</button>
                                </li>

                            )
                        }
                    })
                }
                <hr />            
            </div>
         );
    }
}
 
export default TodoList2;