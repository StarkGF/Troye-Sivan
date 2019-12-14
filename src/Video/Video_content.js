import React from 'react'
import V_4 from './zan.png'
import V_5 from './money.png'
import V_6 from './xingxing.png';
import V_7 from './forward.png';
import V_8 from './导航栏头像.png';
import V_9 from './点击前.png';
import V_10 from './paus.png';
import V_11 from './gengduo.png';
import V_12 from './fasong.png';
import V_13 from './弹幕按钮.png';
import V_15 from './unzan.png';



const VideoList1=[
    {
        pic:V_4,
        name:'1989',
    },
    {
        pic:V_5,
        name:'200',
    },
    {
        pic:V_6,
        name:'789',
    },
    {
        pic:V_7,
        name:'900',
    }


]
class Video_content extends React.Component{
    render(){
        return(
            <div id={'V_main'}>
                <div id={'content_user'}>
                    <div id={'user_left'}>
                        <img src={V_8} className={'V_point'}></img><br></br>
                        <img src={V_9} id={'V_heart'}></img>
                        <span>用户名</span>
                    </div>
                    <div id={'content_user_right'}>
                        <h1>标题</h1>
                        <p>2019年12月1日 00：00</p>
                        <p>播放量：1万</p>
                    </div>
                </div>
                <div id={'content_top'}></div>
                <div id={'content_top_under'}>
                    <img src={V_10 } id={'V_10'}></img>
                    <div id={'row'}></div>
                    <span>00:00/12:30</span>
                    <div id={'meanu'}>
                        <img src={V_11} id={'V_11'}></img>
                        <div id={'menu'}>
                            <p>高清</p>
                            <p>设置</p>
                            <p>全屏</p>
                            <p>倍速</p>
                            <p>音量</p>
                        </div>
                    </div>
                </div>
                <div id={'pink_1'}>
                    <input type="text" placeholder="发条弹幕吧"></input>
                    <img src={V_12} id={'V_12'}></img>
                </div>
                <div id={'pink_2'}>
                    <div>
                    <img src={V_13} id={'V_13'}></img>
                    <span id={'stra'}>弹幕开</span></div>
                    <div id={'pink_2_right'}>
                        {
                            VideoList1.map((item)=>(
                            <div className={'pink_pic'}><img src={item.pic} className={'V_four'}></img><span>{item.name}</span></div>
                            ))
                        }
                    </div>
                </div>
                <div className={'content_under'}>
                    <div id={'content_under_left'}><span className={'uesless'}>内容</span><img src={V_8} className={'V_point'}></img><br></br><span className={'sleep'}>用户名11-12</span></div>
                    <div id={'content_under_right'}><img src={V_4} className={'zan'}></img><span>99</span><img src={V_15} className={'unzan'}></img><span>11</span></div>
                </div>
                <div className={'content_under'}>
                    <div id={'content_under_left'}><span className={'uesless'}>内容</span><img src={V_8} className={'V_point'}></img><br></br><span className="sleep">用户名11-12</span></div>
                    <div id={'content_under_right'}><img src={V_4} className={'zan'}></img><span>99</span><img src={V_15} className={'unzan'}></img><span>11</span></div>
                </div>
            </div>
        )
    }
}

export default Video_content;