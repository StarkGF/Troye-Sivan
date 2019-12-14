import React from 'react'
import '../css/footer.scss'
import weixin from '../static/footer/微信.png'
import weibo from '../static/footer/微博.png'
import tieba from '../static/footer/贴吧.png'
function Footer() {
    let bilibili=['关于我们','联系我们','加入我们','友情链接','bilibili认证','Investor Relations'];
    let goto1=['帮助中心','高级弹幕','活动专题页','侵权申诉','用户反馈论坛','活动中心'];
    let goto2=['壁纸站','专车号服务中心','名人堂','客户端下载'];
    let map1 = bilibili.map((item,index)=>{
        return(
                <li className={'footerList'} key={item+index}><a href={'/'}>{item}</a></li>
            )
    });
    let map2 = goto1.map((item,index)=>{
        return(
            <li className={'footerList'} key={item+index}><a href={'/'}>{item}</a></li>
        );
    });
    let map3 = goto2.map((item,index)=>{
       return(
           <li className={'footerList'} key={item+index}><a href={'/'}>{item}</a></li>
       );
    });
    return(
        <div id={'footerContainer'}>
            <div id={'footerPosition'}>
                <div className={'col col1'}>
                    <h3 className={'footerH3'}>bilibili</h3>
                    <ul id={'list1'} className={'list'}>{map1}</ul>
                </div>
                <div className={'col col2'}>
                    <h3 className={'footerH3'}>传送门</h3>
                    <ul id={'list2'} className={'list'}>{map2}</ul>
                </div>
                <div className={'col col3'}>
                    <ul id={'list3'} className={'list'}>{map3}</ul>
                </div>
                <div className={'col col4'}>
                    <h3 className={'footerH3'}>官方媒体</h3>
                    <div className={'mediaLogo'}>
                        <img className={'footerLogo'} src={weibo} alt={'微博'}/>
                        <img className={'footerLogo'} src={tieba} alt={'贴吧'}/>
                        <img className={'footerLogo'} src={weixin} alt={'微信'}/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Footer