import React from 'react'
import SubNav from "./subNav";
import MyVideo from "./myVideo";
import MyColumn from "./myColumn";
import MyFavorite from "./myFavorite";
import MyPhoto from "./myPhoto";
import MyInfo from "./myInfo";
import '../css/main.scss'
import MyData from "./myData";
import Post from "./post";
import renzheng from '../static/home/小图标/个人认证1.psd.png'
import Dianliang from "./dianliang";
import goTop from '../static/home/回到顶部.png'
class Main extends React.Component{
    render() {
        return(
            <div id={'background'}>
                <div id={'mainContainer'}>
                    <div className={'main'}>
                        <SubNav />
                        <MyVideo />
                        <MyColumn />
                        <MyFavorite />
                        <MyPhoto />
                    </div>
                    <div id={'sidebar'}>
                        <MyInfo />
                        <MyData />
                        <Post />
                        <div className={'renzheng'}>

                            <p><img src={renzheng} alt={'jj'}/>bilibili个人认证：bilibili 2018百大UP主、高能联盟成员</p>
                        </div>
                        <Dianliang />
                        <div className={'myLive'}>
                            <h2>我的直播间</h2>
                            <a id={'myLiveOpen'} href={'/'}>开启</a>
                            <p id={'myLiveBottom'}><a  href={'/'}>查看往期直播</a></p>
                        </div>
                        <img src={goTop} alt={'eer'} id={'goTop'}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main