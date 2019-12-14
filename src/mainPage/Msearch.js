import React from 'react'
import zhuye from '../static/mainPage/nav/主页.png'
import dongtai from '../static/mainPage/nav/动态.png'
import paihang from '../static/mainPage/nav/排行.png'
import download from '../static/mainPage/封面/download.gif'
import logo from '../static/mainPage/nav/logo.png'
import avatar from '../static/mainPage/nav/头像.png'
import xiaoxi from '../static/mainPage/nav/消息.png'
import  qiehuan from '../static/mainPage/nav/切换.png'
import shoucang from '../static/mainPage/nav/收藏.png'
import tuichu from '../static/mainPage/nav/推出.png'
import zuo from '../static/mainPage/container/切换左.png'
import you from '../static/mainPage/container/切换.png'
import '../css/mainPage/Msearch.scss'
class Msearch extends React.Component {
    render() {
        return(
          <div className={'Msearch'}>
              <div className={'Mrow1'}>
                  <div className={'col1'}>
                      <div>
                          <img src={zhuye} alt={'zhuye'}/>
                          <span>主页</span>
                      </div>
                      <div>
                          <img src={dongtai} alt={'zhuye'}/>
                          <span>动态</span>
                      </div>
                      <div>
                          <img src={paihang} alt={'zhuye'}/>
                          <span>排行</span>
                      </div>
                  </div>
                  <div className={'rol2'}>
                      <div className={'MimgCtn'}>
                          <img src={download} alt="sss"/>
                      </div>
                  </div>
                  <div className={'MsearchBlock'}>
                      <img src={logo} alt={'sgfg'}/>
                      <input placeholder={'金坷垃！金坷垃！'}/>
                  </div>
                  <div className={'Mlogin'}>
                      <div>
                          <img src={avatar} alt={'jhkj'}/>
                          <span>用户名</span>
                      </div>
                      <table>
                          <tr>
                              <th>关注</th>
                              <th>粉丝</th>
                          </tr>
                          <tr>
                              <td><img src={xiaoxi} alt={'hafs'}/>  消息</td>
                              <td><img src={shoucang} alt={'hafs'}/>  收藏</td>
                          </tr>
                          <tr>
                              <td><img src={qiehuan} alt={'hafs'}/>  切换账号</td>
                              <td><img src={tuichu} alt={'hafs'}/>  退出登录</td>
                          </tr>

                      </table>
                  </div>
              </div>
              <div className={'Mrow2'}>
                  <img className={'Mzuo'} src={zuo} alt={'sgdas'}/>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>动画</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>番剧</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>连载动画</a></li>
                              <li><a href={'/'}>完结动画</a></li>
                              <li><a href={'/'}>资讯</a></li>
                              <li><a href={'/'}>番剧索引</a></li>
                              <li><a href={'/'}>时间表</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>国创</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>音乐</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>舞蹈</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>游戏</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>科技</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>鬼畜</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>时尚</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className={'MNavList'}>
                      <div className={'MNavP'}>
                          <h2>影视</h2>
                          <p>486</p>
                          <ul className={'MNavListUl'}>
                              <li><a href={'/'}>MAD·AMV</a></li>
                              <li><a href={'/'}>MMD·3D</a></li>
                              <li><a href={'/'}>短片·手书·配音</a></li>
                              <li><a href={'/'}>特摄</a></li>
                              <li><a href={'/'}>综合</a></li>
                          </ul>
                      </div>
                  </div>
                  <img src={you} alt={'gadfas'} className={'Myou'}/>
              </div>
          </div>
        );
    }
}

export default Msearch