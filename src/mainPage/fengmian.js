import React from 'react'
import fmcol1 from '../static/mainPage/封面/banner 上/cover_n.png'
import fmcol2 from '../static/mainPage/封面/banner 上/cober_n1.png'
import fmcol3 from '../static/mainPage/封面/banner 上/cover6.png'
import fmcol4 from '../static/mainPage/封面/banner 上/cover_n3.png'
import fmcol5 from '../static/mainPage/封面/banner 上/adv.png'
import fm2col1 from '../static/mainPage/封面/banner 下/cover5.png'
import fm2col2 from '../static/mainPage/封面/banner 下/cover4.png'
import fm2col3 from '../static/mainPage/封面/banner 下/cover1.png'
import fm2col4 from '../static/mainPage/封面/banner 下/cover2.png'
import fm2col5 from '../static/mainPage/封面/banner 下/cover3.png'
import fmtouxiang from '../static/mainPage/nav/头像.png'
import zhibo from '../static/mainPage/container/直播.png'
import douzi1 from '../static/mainPage/container/豆子1.png'
import douzi2 from '../static/mainPage/container/豆子2.png'
import yonghuming from '../static/mainPage/container/用户名.png'
import fmbofang from '../static/mainPage/container/播放.png'
import qiehuanzuo from '../static/mainPage/container/切换左.png'
import qiehuanyou from '../static/mainPage/container/切换.png'
import '../css/mainPage/fengmian.scss'
class Fengmian extends React.Component{
    render() {
        return(
          <div id={'Mfengmian'}>
              <div className={'Mfmrow1'}>
                  <div className={'Mfmcol1'}>
                        <img className={'Mfmrow1top'} src={fmcol1} alt={'fgsfg'}/>
                        <div>
                            <img id={'Mfmtouxiang'} src={fmtouxiang} alt={'kjhkj'}/>
                            <h4>正在直播<img src={zhibo} alt={'hsdfdas'}/></h4>
                        </div>
                  </div>
                  <div className={'Mfmcol2'}>
                        <img className={'Mfmrow1top'} src={fmcol2} alt={'ifdsa'}/>
                        <p>P站美图精选第十二期</p>
                        <p id={'Mfmcol2p'}><img src={yonghuming} alt={'hasdfha'}/>用户名</p>
                      <h4>热门文章</h4>
                  </div>
                  <div className={'Mfmcol3'}>
                      <div id={'Mdouzi'}>
                          <img className={'douzi'} src={douzi1} alt={'asfadsfafds'}/>
                          <img className={'douzi'} src={douzi2} alt={'asfadsfafds'}/>
                          <img className={'douzi'} src={douzi2} alt={'asfadsfafds'}/>
                          <img className={'douzi'} src={douzi2} alt={'asfadsfafds'}/>
                          <img className={'douzi'} src={douzi2} alt={'asfadsfafds'}/>
                      </div>
                  </div>
                  <div className={'Mfmcol4'}>
                        <img className={'Mfmrow1top'} src={fmcol4} alt={'22'}/>
                        <p>东方入眠抄 #6</p>
                        <div id={'Mfmcol4img'}>
                            <img src={qiehuanzuo} alt={'dd'}/>
                            <img id={'Mfmbofang'} src={fmbofang} alt={'dd'}/>
                            <img src={qiehuanyou} alt={'ddd'}/>
                        </div>
                      <h4>音乐</h4>
                  </div>
                  <div className={'Mfmcol5'}>

                  </div>
              </div>
              <div className={'Mfmrow2'}>
                  <img src={fm2col1} alt={'ss'}/>
                  <img src={fm2col2} alt={'ss'}/>
                  <img src={fm2col3} alt={'ss'}/>
                  <img src={fm2col4} alt={'ss'}/>
                  <img src={fm2col5} alt={'ss'}/>
              </div>
          </div>
        );
    }
}

export default Fengmian