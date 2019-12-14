import React from 'react'
import icon1 from '../static/home/小图标/主页.png'
import icon2 from '../static/home/小图标/动态.png'
import icon3 from '../static/home/小图标/投稿.png'
import icon4 from '../static/home/小图标/频道.png'
import icon5 from '../static/home/小图标/收藏.png'
import icon6 from '../static/home/小图标/订阅.png'
import '../css/subNav.scss'
class SubNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
        subNavList:[
            {'icon':icon1,'name':'主页'},{'icon':icon2,'name':'动态'},{'icon':icon3,'name':'投稿'},
            {'icon':icon4,'name':'频道'},{'icon':icon5,'name':'收藏'},{'icon':icon6,'name':'订阅'}
            ]
        }
    }
    render() {
        let list=this.state.subNavList.map((item,index)=>{
            return(
                <div className={'subNavList'} id={'subNav'+index} key={index}>
                    <img className={'navIcon'} src={item.icon} alt={item.name}/>
                    <h2 className={'subNavName'}>{item.name}</h2>
                </div>
            )
        });
        return(
            <div id={'subNav'}>
                {list}
                <div className={'search'}>
                    <input id={'searchInput'} type={'text'} placeholder={"搜索视频"}/>
                    <div id={'searchIcon'}/>
                </div>
            </div>
        );
    }
}

export default SubNav