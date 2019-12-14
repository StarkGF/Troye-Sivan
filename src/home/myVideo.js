import React from 'react'
import VideoDetail from "./videoDetail";
import topVideoImg from '../static/home/置顶1.png'
import bofang from '../static/home/小图标/播放.png'
import danmu from '../static/home/小图标/弹幕.png'
import dianzan from '../static/home/小图标/点赞.png'
import '../css/myvideo.scss'
class MyVideo extends React.Component {

    render() {
        return (
            <div id={'myVideo'}>
                <h2 id={'title'}>我的视频</h2>
                <div id={'topVideo'}>
                    <div className={'left'}>
                        <div id={'topVideoTitle'}>
                            <h3>置顶视频</h3><a href={'/'}>修改</a><a href={'/'}>删除</a>
                        </div>
                        <img id={'topVideoImg'} src={topVideoImg} alt={'图片'}/>
                    </div>
                    <div className={'right'}>
                        <h3>【党妹】首试黑皮！瓦尔基里VS雅典娜，选谁？罗马斗兽场/许愿池震撼实拍~咖啡拟人妆！</h3>
                        <p>摄影：网管菌 后勤：李秋爽 发型：懒懒 后期：NPC 调色：小T 九夜 Bgm： 盘尼西林-雨夜曼彻斯特 Waking Ashland-OctoberSkies 花儿乐队-鹊桥汇
                            大张伟-我在诗里看到了你、胡撸胡撸瓢儿 Ennio Morricone-Un Amico</p>
                        <div className={'info'}>
                            <img id={'bofang'} src={bofang} alt={'bofang'}/>
                            <span>播放302.2万</span>
                            <img id={'danmu'} src={danmu} alt={'danmu'}/>
                            <span>弹幕8.4万</span>
                            <img id={'dianzan'} src={dianzan} alt={'dianzan'}/>
                            <span>点赞22.7万</span>
                            <span className={'date'}>6-6</span>
                        </div>
                    </div>
                </div>
                <div id={'allVideo'}>
                    <div className={'allVideoTitle'}>
                        <h3>全部视频(114)</h3>
                        <ul>
                            <li><a id={'border'} href={'/'}>最新发布</a></li>
                            <li><a href={'/'}>最多播放</a></li>
                            <li><a href={'/'}>最多收藏</a></li>
                        </ul>
                        <div className={'button'}>
                            <a href={'/'}>管理</a>
                            <a href={'/'}>查看更多</a>
                        </div>
                    </div>
                    <VideoDetail num={0} />
                    <VideoDetail num={1} />
                    <VideoDetail num={2} />
                    <VideoDetail num={3} />
                    <VideoDetail num={0} />
                    <VideoDetail num={1} />
                    <VideoDetail num={2} />
                    <VideoDetail num={3} />
                </div>
            </div>
        );
    }
}

export default MyVideo