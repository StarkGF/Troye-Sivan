import React from 'react'
import VideoDetail from "./videoDetail";
import '../css/myColumn.scss'
class MyColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list:['快乐生活','日常穿着','好看的小裙子呀','应该有点用','真的很好笑的']
        }
    }
    render() {
        let list=this.state.list.map((item,index)=>{
            return(
                <li className={'navList li'+index} key={index}><a href={'/'}>{item}</a></li>
            );
        });
        return(
            <div id={'myColumn'}>
                <div id={'myColumnTitle'}>
                    <div className={'position'}>
                        <h2 id={'title'}>我的专栏</h2>
                        <div className={'button'}>
                            <a href={'/'}>管理</a>
                            <a href={'/'}>查看全部</a>
                        </div>
                    </div>
                    <ul>
                        {list}
                    </ul>
                    <a id={'create'} href={'/'}>创建</a>
                </div>
                <div className={'videoDetailContainer'}>
                    <VideoDetail num={0}/>
                    <VideoDetail num={1}/>
                    <VideoDetail num={2}/>
                    <VideoDetail num={3}/>
                </div>
            </div>
        );
    }
}

export default MyColumn