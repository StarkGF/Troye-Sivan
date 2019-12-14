import React from 'react'
import ppp1 from './UP主.png'
import ppp2 from './时间.png'
import ppp3 from './播放量.png'
import ppp4 from './弹幕的副本.png'
import ppp5 from './arrowbottom.png'
import side_1 from './cover-m1.png'
import side_2 from './cover-m2.png'
import side_3 from './cover-m3.png'
import side_4 from './cover-m4.png'
import side_5 from './cover-m6.png'
import side_6 from './换一换.png'
import side_7 from './arrowblue.png'


const side_list=[
    {
        title:'《第一视频标题》',
        image:side_1,
    },
    {
        title:'《第二视频标题》',
         image:side_2,
    },
    {
        title:'《第三视频标题》',
        image:side_3,
    },
    {
        title:'《第四视频标题》',
        image:side_4,
    },
    {
        title:'《第五视频标题》',
        image:side_5,
    },
]

class Video_content_side extends React.Component{
    render(){
        return(
            <div id={'V_side'}>
                <div id={'side_top'}>
                    <div id={'side_unfold'}>
                    <p>弹幕列表</p>
                        <div>
                            <span>展开
                            <img src={ppp5}></img></span>
                        </div>
                    </div>
                    <div id={'side_white'}>相关视频</div>
                </div>
                <div id={'V_sidelist'}>
                    {side_list.map(
                        (item)=>(
                            <div className={'square'}>
                                <p>{item.title}</p>
                                <div className={'things'}>
                                    <div className={'thing'} className={'clear'}>
                                        <span><img className={'sight'} src={ppp1} ></img></span>
                                        <span>用户名</span>
                                    </div>
                                    <div className={'thing'} className={'clear'}>
                                        <img className={'sight'} src={ppp2} ></img>
                                        <span>11-27</span>
                                    </div>
                                    <div className={'thing'}>
                                        <img className={'sight'} src={ppp3}></img>
                                        <span>486W</span>
                                    </div>
                                    <div className={'thing'}>
                                        <img className={'sight'} src={ppp4}></img>
                                        <span>2W</span>
                                    </div>
                                </div>
                                <div className={'thing_pic'}>
                                    <img src={item.image}>
                                    
                                    </img>
                                </div>

                            </div>
                        )
                    )}
                </div>
                <div id={'more'}>
                   <div className="litlrr">
                       <span>换一换</span>
                       <img src={side_6} id={'change'}></img>
                   </div>
                   <div className="litlr">
                       <span>更多</span>
                       <img src={side_7} if={'lot'}></img>
                   </div>

                </div>
            </div>
        )
    }
}

export default Video_content_side