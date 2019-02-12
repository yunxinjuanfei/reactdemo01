
import React from 'react';
import { Link } from "react-router-dom";


class News extends React.Component {

    constructor(props) {
        super(props) //用户父子组件传值，建议大家这么写
        this.state = {
            list: [
                {
                    aid: 1,
                    title: '我是新闻111'
                },
                {
                    aid: 2,
                    title: '我是新闻222'
                },
                {
                    aid: 3,
                    title: '我是新闻333'
                }

            ]
        }
    }

    render() {
        return(
            <div>
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <li key={key}><Link to={`/content/${value.aid}`}> {value.title} </Link> </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News