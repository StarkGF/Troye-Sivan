import React from 'react'
import img1 from '../static/home/相册1.png'
import img2 from '../static/home/相册2.png'
import img3 from '../static/home/相册3.png'
import img4 from '../static/home/相册4.png'
import liulan from '../static/home/小图标/浏览.png'
import dianzan from '../static/home/小图标/点赞.png'
import '../css/myPhoto.scss'
class MyPhoto extends React.Component{
    render() {
        return(
          <div id={'myPhoto'}>
              <div id={'myPhotoTitle'}>
                  <h2>我的相册</h2>
                  <a href={'/'}>管理</a>
              </div>
              <div className={'myPhtList'}>
                  <div className={'myPhtDtl'}>
                      <img src={img1} alt={'ww'}/>
                      <div className={'myPhtText'}>
                          <p>互动抽奖今天来不及看月亮啦大家多替我看看！视...</p>
                          <div className={'myPhtData'}>
                              <img src={liulan} alt={'sss'}/>
                              <span>632.4万</span>
                              <img className={'hasMargin'} src={dianzan} alt={'sssss'}/>
                              <span>4万</span>
                          </div>
                      </div>
                  </div>
                  <div className={'myPhtDtl'}>
                      <img src={img2} alt={'ww'}/>
                      <div className={'myPhtText'}>
                          <p>打工七天乐终于收[doge]可以安心剪视频了</p>
                          <div className={'myPhtData'}>
                              <img src={liulan} alt={'sss'}/>
                              <span>311.3万</span>
                              <img className={'hasMargin'} src={dianzan} alt={'sssss'}/>
                              <span>6.8万</span>
                          </div>
                      </div>
                  </div>
                  <div className={'myPhtDtl'}>
                      <img src={img3} alt={'ww'}/>
                      <div className={'myPhtText'}>
                          <p>三天BW结束惹，百变小阿党各位还满意吗！行程最...</p>
                          <div className={'myPhtData'}>
                              <img src={liulan} alt={'sss'}/>
                              <span>356.1万</span>
                              <img className={'hasMargin'} src={dianzan} alt={'sssss'}/>
                              <span>6.7万</span>
                          </div>
                      </div>
                  </div>
                  <div className={'myPhtDtl'}>
                      <img src={img4} alt={'ww'}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default MyPhoto