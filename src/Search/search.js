import React from 'react';
import './search.scss'
import Search_nav from './search_nav'
import Search_box from './search_box'
import Search_nav_left from './search_nav_left'
import Content from './content_box'
import pic6 from './gengduo.png'
import S_Footer from './S_footer'



class Search extends React.Component{
    render(){
            return(
                <>
                    <Search_nav></Search_nav>
                    <Search_box></Search_box>
                    <div id={'nav_C_box'}>
                        <div id={'nav_top_right'}>按<span>时间</span>排序<br></br><span>热度</span></div>
                        <div id={'nav_top_left'}>相关结果（约119条）</div>
                        <Search_nav_left></Search_nav_left>
                        <Content id={'nav_content_box'}></Content>
                    
                    </div>
                     <div id={'nav_bottom_right'}><div>更多<img src={pic6}></img></div></div>
                     <S_Footer></S_Footer> 
                     <div id={'back'}><div>回到顶部</div></div>

                </>
            )
    }
}

export default Search;