import React from 'react'
import huanyihuan from '../static/mainPage/container/换一换.png'
import gengduo from '../static/mainPage/container/更多.png'
import MfqDtl from "./MfqDtl";
import '../css/mainPage/Mfq.scss'
import Paihangbang from "./paihangbang";
class Fenqu extends React.Component{
    render() {
        return(
            <div id={'Mfenqu'}>
                <div id={'Mfqleft'}>
                    <div className={'MfqTitle'}>
                        <h2><img src={this.props.MfqTitleImg} alt={'aa'}/>{this.props.MfqTitle}</h2>
                        <div className={'MfqTitleR'}>
                            <span>换一换</span>
                            <img src={huanyihuan} alt={'aa'}/>
                            <span>更多</span>
                            <img src={gengduo} alt={'ss'}/>
                        </div>
                    </div>
                    <div className={'MfqDtlBlock'}>
                        <MfqDtl Mfqnum={0}/>
                        <MfqDtl Mfqnum={1}/>
                        <MfqDtl Mfqnum={2}/>
                        <MfqDtl Mfqnum={3}/>
                        <MfqDtl Mfqnum={4}/>
                        <MfqDtl Mfqnum={5}/>
                        <MfqDtl Mfqnum={6}/>
                        <MfqDtl Mfqnum={7}/>
                    </div>
                </div>
                <div id={'Mfqright'}>
                    <Paihangbang />
                </div>
            </div>
        );
    }
}

export default Fenqu