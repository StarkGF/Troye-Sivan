import React from 'react'
import two_D from './二维码-1.png'
import PR1 from './未标题-1.png'
import PR2 from './小人2.png'

class Sign_right extends React.Component{
    render(){
        return(
            <div id={'sign_right'}>
                <div id={'code'}><img src={two_D}></img></div>
                <div id={'Sign_p1'} ><img src={PR1} id={'PR1'}></img>
                <div id={'Sign_words'}>
                    <p className={'Sign_up'}>
                                请使用 哔哩哔哩客户端
                            </p>
                    <p id={'Sign_middle'}>
                                扫码登录
                            </p>
                    <p className={'Sign_up'}>
                                或扫码下载APP
                            </p>
                </div>
                <img id={'PR2'} src={PR2}></img></div>
                
            </div>
        )
    }
}

export  default  Sign_right;