import React from 'react'
import paihangbang from '../static/mainPage/container/排行.png'
import biaoqian from '../static/mainPage/container/热门标签.png'
import gengduo from '../static/mainPage/container/更多.png'
import '../css/mainPage/Mfqsidebar.scss'
class Paihangbang extends React.Component{
    render() {
        return(
            <div id={'Mfqsidebar'}>
                <div id={'MfqPai'}>
                    <h2><img src={paihangbang} alt={'sss'}/>排行榜</h2>
                    <ul>
                        <li><a href={'/'}><span className={'Mfqspan'}>1</span>【明日方舟动画】茂名守林人</a></li>
                        <li><a href={'/'}><span className={'Mfqspan'}>2</span>从完美初恋到不穿裤子？这些超有...</a></li>
                        <li><a href={'/'}><span className={'Mfqspan'}>3</span>大师级动画甩当今动画几十条街 精...</a></li>
                        <li><a href={'/'}><span>4</span>一分钟后抢走你的硬币，小 丑 派 ...</a></li>
                        <li><a href={'/'}><span>5</span>【恶魔勇者】我再也不相信光明...</a></li>
                    </ul>
                    <a className={'Mfqgengduo'} href={'/'}><img src={gengduo} alt={'jjj'}/>更多</a>
                </div>
                <div id={'Mfqremen'}>
                    <h2><img src={biaoqian} alt={'sss'}/>热门标签</h2>
                    <div id={'Mfqposition'}>
                        <a id={'Mfqposition1'} href={'/'}>#夏夜吹雪</a>
                        <a id={'Mfqposition2'} href={'/'}>#完事了祭</a>
                        <a id={'Mfqposition3'} href={'/'}>#斯哈斯哈</a>
                        <a id={'Mfqposition4'} href={'/'}>#DD胜利</a>
                        <a id={'Mfqposition5'} href={'/'}>#Vtuber</a>
                    </div>

                </div>
            </div>

        );
    }
}

export default Paihangbang