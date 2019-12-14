import React from 'react'
import '../css/mainPage/MfqDtl.scss'
import Mfqimg1 from '../static/mainPage/封面/cvoer-m1.png'
import Mfqimg2 from '../static/mainPage/封面/cover-m2.png'
import Mfqimg3 from '../static/mainPage/封面/cover-m3.png'
import Mfqimg4 from '../static/mainPage/封面/cover-m4.png'
import Mfqimg5 from '../static/mainPage/封面/cover-m5.png'
import Mfqimg6 from '../static/mainPage/封面/cover-m6.png'
import Mfqimg7 from '../static/mainPage/封面/cover-m7.png'
import Mfqimg8 from '../static/mainPage/封面/cover-m8.png'
import Mfqyhm from '../static/mainPage/container/用户名.png'
import Mfqtime from '../static/mainPage/container/时间.png'
import Mfqbofangliang from '../static/mainPage/container/播放量.png'
import Mfqdanmushu from '../static/mainPage/container/弹幕数.png'
class MfqDtl extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            MfqDtlimg:[Mfqimg1,Mfqimg2,Mfqimg3,Mfqimg4,Mfqimg5,Mfqimg6,Mfqimg7,Mfqimg8],
            MfqDtlh4:['《第一视频标题》',
                '《第三视频标题》','《第五视频标题》',
                '《第七视频标题》','《第二视频标题》',
                '《第四视频标题》','《第六视频标题》',
                '《第八视频标题》'],
        }
    }
    render() {
        let i=this.props.Mfqnum;
        return(
            <div className={'MfqDtl'}>
                <img className={'MfqDtlimg'} src={this.state.MfqDtlimg[i]} alt={'sss'}/>
                <h4><a href={'/'}>{this.state.MfqDtlh4[i]}</a></h4>
                <table>
                    <tr>
                        <td><img src={Mfqyhm} alt={'ss'}/>用户名</td>
                        <td><img src={Mfqtime} alt={'sss'}/>11-27</td>
                    </tr>
                    <tr>
                        <td><img src={Mfqbofangliang} alt={'ssd'}/>486w</td>
                        <td><img src={Mfqdanmushu} alt={'gsa'}/>2w</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default MfqDtl