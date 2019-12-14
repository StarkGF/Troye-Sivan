import React from 'react'
import Search_nav from '../Search/search_nav'
import Sign_left from './Sign_left'
import Sign_right from './Sign_right'
import './Sign.scss'


class Sign extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id={'Sign'}>
                <div id={'Sign_h'}>返回</div>
                <Search_nav></Search_nav>
                <div id={'title'}>登录</div>
                <div id={'S_content'}>
                    <Sign_left></Sign_left>
                    <Sign_right></Sign_right>
                </div>
                
            </div>
        )
    }
}

export default Sign;