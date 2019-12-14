import React from 'react';
import './search_nav_left.scss'


class Search_nav_left extends React.Component{
    render(){
        return(
            <>
                <div id={'SnLe'}>
                    <div className={'S_title'}>综合排序</div>
                    <div id={'nav_c1'}>
                        <a className={'nav_co1'}>最多点击</a>
                        <a className={'nav_con1'}>最新发布</a>
                        <a className={'nav_co1'}>最多详情</a>
                        <a className={'nav_con1'}>最多收藏</a>
                    </div>
                    <div className={'S_title'}>全部时长</div>
                    <div id={'nav_c2'}>
                        <a className={'nav_co2'}>10分钟以下</a>
                        <a className={'nav_con2'}>10-30分钟</a>
                        <a className={'nav_co2'}>30-60分钟</a>
                        <a className={'nav_con2'}>60分钟以上</a>
                    </div>
                    <div className={'S_title'}>全部分区</div>
                    <div id={'nav_c3'}></div>
                        <div id={'nav_con3'}>
                            <a className={'nav_co3'}>动画</a>
                            <a className={'nav_co3'}>番剧</a>
                            <a className={'nav_co3'}>国创</a>
                            <a className={'nav_co3'}>音乐</a><br></br>
                            <a className={'nav_co3'}>舞蹈</a>
                            <a className={'nav_co3'}>游戏</a>
                            <a className={'nav_co3'}>科技</a>
                            <a className={'nav_co3'}>数码</a><br></br>
                            <a className={'nav_co3'}>生活</a>
                            <a className={'nav_co3'}>鬼畜</a>
                            <a className={'nav_co3'}>时尚</a>
                            <a className={'nav_co3'}>广告</a><br></br>
                            <a className={'nav_co3'}>娱乐</a>
                            <a className={'nav_co3'}>影视</a>
                            <a className={'nav_co3'}>电影</a>
                            <a className={'nav_co3'}>纪录片</a>
                        </div>
                </div>
            </>
        )
    }
}

export default Search_nav_left;