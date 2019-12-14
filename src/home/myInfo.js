import React from 'react'
import '../css/myInfo.scss'
import avatar from '../static/home/头像.png'
import touxian from '../static/home/小图标/头衔.png'
class MyInfo extends React.Component{
    render() {
        return(
            <div id={'myInfo'}>
                <img className={'avatar'} src={avatar} alt={'ssf'}/>
                <div className={'infoDtl'}>
                    <div className={'infoTitle'}>
                        <img src={touxian} alt={'ee'}/>
                        <h2>机智的党妹</h2>
                    </div>
                    <p>爱比讨厌更有力量。微博：我要这脸有何用 商业合作请联系qq：2221142014<span><a href={'/'}>编辑</a></span></p>
                </div>
            </div>
        );
    }
}

export default MyInfo