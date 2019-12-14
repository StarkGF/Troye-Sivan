import React from 'react';
import V_p1 from './logo2.png';
import V_p2 from './tougao.png';
import V_p3 from './search.png';



const Video_nav_list=[
    '主站',
    '游戏中心',
    '直播',
    '会员购',
    '漫画',
    '赛事',
    'BML'
]

class Video_nav extends React.Component{
    render(){
        return(
            <>
                <div id={'vN'}>
                    <div id={'vH'}>
                        <div id={'tired'}>
                            <div id={'twe'}>
                                <img src={V_p1}></img>
                                <div id={'V_Nav_left'}>{
                                    Video_nav_list.map((item)=>(
                                        <span className={'Vi_nav1'}>{item}</span>
                                    ))
                                }</div>
                            </div>
                            <div id={'V_nav_right'}>
                                <span className={'Vi_nav2'}>动态</span>
                                <span className={'Vi_nav2'}>历史</span>
                                <span className={'Vi_nav2'}>创作中心</span>
                                <span id={'Vi_nav_special'}>投稿</span>
                                <img src={V_p2}></img>
                            </div>
                        </div>
                        </div>
                </div>
                <div id={'V_u'}>
                   <div id={'V_input'}><input type="search"></input>
                   <img src={V_p3}></img>
                   </div> 
                </div>
            </>
        )
    }
}

export default Video_nav;