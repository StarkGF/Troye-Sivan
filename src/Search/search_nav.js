import React from 'react';
import './search_nav.scss';

const navlist=[{name:'主页' ,ID:'A'},{name:'游戏中心',ID:'B'},
{name:'直播',ID:'C'},{name:'会员购',ID:'D'},{name:'漫画',ID:'E'},{name:'赛事',ID:'F'},{name:'BML',ID:'G'}];

class Search_nav extends React.Component{
    render(){
        return(
            <div id={'sN'}>
                <div id={'sL'}>
                    <div id={'search_nav_list'}>
                    {
                        navlist.map((itme)=>(
                            <li id={itme.ID}>{itme.name}</li>
                            )
                        )
                    
                    }
                    </div>           
                </div>
            </div>    
        )
    }
}

export default Search_nav;