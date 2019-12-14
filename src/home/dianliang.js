import React from 'react'
import dianchi from '../static/home/电池.png'
import chongdian from '../static/home/充电用户.png'
import '../css/dianliang.scss'
class Dianliang extends React.Component{
    render() {
        return(
          <div className={'dianliang'}>
             <div className={'dianliangTop'}>
                 <h2>我的电量</h2>
                 <span>本月409人为我充电</span>
             </div>
              <div className={'DLdetail'}>
                    <img id={'dianchi'} src={dianchi} alt={'dianchi'}/>
                    <h3>67060</h3>
                  <img id={'chongdian'} src={chongdian} alt={'serf'}/>
              </div>

          </div>
        );
    }
}

export default Dianliang