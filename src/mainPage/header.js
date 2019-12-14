import React from 'react'
import '../css/mainPage/mHeader.scss'
class Header extends React.Component{
    render() {
        return(
          <div id={'Mbackground'}>
              <div className={'MNavContainer'}>
                  <div id={'MtopNav'}>
                      <ul className={'Mleft'} >
                          <li><a href={'/'}>主站</a></li>
                          <hr />
                          <li><a href={'/'}>直播</a></li>
                          <hr />
                          <li><a href={'/'}>漫画</a></li>
                      </ul>
                      <ul className={'Mright'}>
                          <li><a href={'/'}>B币钱包</a></li>
                          <hr />
                          <li><a href={'/'}>游戏中心</a></li>
                          <hr />
                          <li><a href={'/'}>会员中心</a></li>
                      </ul>
                  </div>
                  <div className={'MtopNavR'}>
                      <h3>投稿</h3>
                      <hr/>
                      <p>创作学院</p>
                  </div>
              </div>
          </div>
        );
    }
}

export default  Header