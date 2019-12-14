import React from 'react'
import '../css/myFavorite.scss'
import shoucang1 from '../static/home/收藏夹.png'
import shoucang2 from '../static/home/收藏夹（黑白）.png'
class MyFavorite extends React.Component{
    render() {
        return(
          <div id={'myFavorite'}>
              <div id={'myFavoriteTitle'}>
                  <h2>我的收藏夹</h2>
                  <a href={'/'}>管理</a>
              </div>
              <div className={'myFavList'}>
                  <div className={'myFavDetail'}>
                      <img src={shoucang1} alt={'hh'}/>
                      <h3>默认收藏夹(155)</h3>
                  </div>
                  <div className={'myFavDetail'}>
                      <img src={shoucang1} alt={'hh'}/>
                      <h3>哈哈哈哈哈...(5)</h3>
                  </div>
                  <div className={'myFavDetail'}>
                      <img src={shoucang1} alt={'hh'}/>
                      <h3>有点东西(9)</h3>
                  </div>
                  <div className={'myFavDetail'}>
                      <img src={shoucang2} alt={'hh'}/>
                      <h3>创建新收藏夹</h3>
                  </div>
              </div>
          </div>
        );
    }
}

export default MyFavorite