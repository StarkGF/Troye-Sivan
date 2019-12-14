import React from 'react';
import Video_nav from './Video_nav'
import Video_content from './Video_content'
import Video_content_side from './Video_content_side'
import './Video.scss';

class Video extends React.Component{
    render(){
        return(
            <>
            <Video_nav></Video_nav>
            <div id={'main_right'}>
            <Video_content></Video_content>
            <Video_content_side></Video_content_side>
            </div>
            <div id={'back'}><div>回到顶部</div></div>
            </>
        )
    }
}
export default Video