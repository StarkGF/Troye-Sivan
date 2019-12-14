import React from 'react'
import '../css/header.scss'
import myPhoto from '../static/home/导航栏头像.png'
import avatar from "../static/home/头像.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: ['主站', '游戏中心', '直播', '会员购', '漫画', '赛事', 'BML']
        }
    }

    render() {
        let list = this.state.navList.map((item, index) => {
            return (
                <li className={'navListDtl'} key={item + index}><a href={'/'}>{item}</a></li>
            )
        });
        return (
            <div className={'header'}>
                <div id={'topContainer'}>
                    <div className={'headerContainer'}>
                        <ul className={'navList'}>{list}</ul>
                        <ul className={'myMsg'}>
                            <li className={'myMsgDtl'}><img src={myPhoto} alt={'头像'}/></li>
                            <li className={'myMsgDtl'}><a href={'/'}>消息(33)</a></li>
                            <li className={'myMsgDtl'}><a href={'/'}>稍后再看</a></li>
                            <li className={'myMsgDtl'}><a href={'/'}>历史</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header