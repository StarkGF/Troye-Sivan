import React from 'react'
import TV from './小电视-1.png'
import QQ from './QQ.png'
import weibo from './微博.png'


class Sign_left extends React.Component{
    render(){
        return(
            <div id={'Sign_left'}>
                <div className={'Sign_logo'} id={'logo_special'}><img src={TV}></img></div>
                <div className={'Sign_logo'} id={'pink_1_l'} ><img src={QQ}></img></div>
                <div className={'Sign_logo'} id={'pink_2_l'}><img src={weibo}></img></div>
                <div id={'Sign_main'}>
                    <p>bilibili账号登录</p>
                    <input type="text" id={'count'} placeholder="你的手机号/邮箱"></input>
                    <input type="text" id={'password'} placeholder="密码"></input>
                    <div>
                    <div id={'rem'}></div>
                    <span id={'what'}>记住我</span>
                    <span id={'ember'}>不是自己的电脑不要勾选此项</span>
                    <span id={'forgot'}>忘记密码?</span>
                    <span id={'noway'}>无法验证?</span>
                    </div>
                </div>
                <div id={'warn'}>
                    <span>若未注册，请先注册：</span>
                    <button id={'sign_up'} className={'tijiao'}>注   册</button>
                    <button id={'sign_in'} className={'tijiao'}>登   录</button>
                </div>
            </div>
        )
    }

}

export default Sign_left;