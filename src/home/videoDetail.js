import React from 'react'
import shipin1 from "../static/home/视频1png.png";
import shipin2 from "../static/home/视频2.png";
import shipin3 from "../static/home/视频3.png";
import shipin4 from "../static/home/视频 4.png";
import play from "../static/home/小图标/播放.png"
import '../css/videoDetail.scss'
class VideoDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detail: {
                img: [shipin1, shipin2, shipin3, shipin4],
                title: ['【党妹】大干货！手把手教你摆pose/ 打理假发！三坑拍照教程 之JK制服篇',
                    '【党妹】十天吃遍意大利中餐馆！欧 洲游血泪吐槽/烂脸后的护肤心得',
                    '【党妹】一梦·飞天/奇迹党党走遍中华 之敦煌篇',
                    '【党妹】首试黑皮！瓦尔基里VS雅典 娜，选谁？罗马斗兽场/许愿池震撼 实拍~咖啡拟人妆！'
                ],
                bofang: ['播放174.3万', '播放150.6万', '播放265万', '播放313.7万'],
                date: ['11-9', '11-2', '10-26', '9-30']
            }
        }
    }
    render() {
        let i=this.props.num;
        return(
          <div className={'videoDetail'}>
              <img className={'bigImg'} src={this.state.detail.img[i]} alt={'hh'} />
              <h4>{this.state.detail.title[i]}</h4>
              <div className={'bofang'}><img className={'icon'} src={play} alt={'sss'}/><span>{this.state.detail.bofang[i]}</span><span className={'date'}>{this.state.detail.date[i]}</span></div>
          </div>
        );
    }
}

export default VideoDetail