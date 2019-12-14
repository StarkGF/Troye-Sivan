import React from 'react';
import pic1 from './bilibili搜索.png';
import './search_box.scss'
import pic2 from './search.png'

const SLlist=[
    '综合','视频','番剧','影视','直播','专栏','话题','用户','赛事'
]

class Search_box extends React.Component{
    render(){
        return(
            <div id={'sB'}>
                <div id={'sbL'}><img src={pic1}></img></div>
                <div id={'sBox'}><input type="search"></input><img src={pic2}></img></div>
                <div id={'Lcon'}> 
                    {SLlist.map((item,index)=>(
                        index==0? 
                    <a id={'First'} className={'sbC'}>{item}</a>
                    :<a className={'sbC'}>{item}</a>
                    ))}
                </div>
            </div>
        )
    }
}

export default Search_box;