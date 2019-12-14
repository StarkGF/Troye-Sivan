import React from 'react';
import pic3 from './1.png';
import pic4 from './2.png';
import pic5 from './3.png';
import pic7 from './视频1.png';
import pic8 from './视频2.png';
import pic9 from './视频3.png';
import pic10 from './视频 4.png';
import run from './播放.png';
import './person.scss'

class Content extends React.Component{
        constructor(props){
            super(props);
            this.state={
                pictures1:[
                    
                        pic3,pic4,pic5
                        
                    
                ],
                pictures2:[
                    {
                        pictu:pic7,
                        pas:'【党妹】大干货！手把手教你摆pose/ 打理假发！三坑拍照教程 之JK制服篇',
                        num1:'播放174.3万',
                        date:'11-9',
                    },
                    {
                        pictu:pic8,
                        pas:'【党妹】十天吃遍意大利中餐馆！欧 洲游血泪吐槽/烂脸后的护肤心得',
                        num1:'播放150.6万',
                        date:'11-2',
                    },
                    {
                        pictu:pic9,
                        pas:'【党妹】一梦·飞天/奇迹党党走遍中华 之敦煌篇',
                        num1:'播放265万',
                        date:'10-26',
                    },
                    {
                        pictu:pic10,
                        pas:'【党妹】首试黑皮！瓦尔基里VS雅典 娜，选谁？罗马斗兽场/许愿池震撼 实拍~咖啡拟人妆！',
                        num1:'播放313.7万',
                        date:'9-30',
                    },
                ]
            }
        }
        render(){
            {
                return(
                   <>
                    {this.props.id=='nav_content_box'?
                    <div id={'nav_all'}>
                        <div className={'nav_Con'}>{
                                this.state.pictures1.map((x)=>
                                (
                                    <div className={'nav_picture'}><img src={x}></img>
                                    <p className={'nav_bottom'}>标题<br></br>发布者</p>
                                    </div>
                                ))}
                        </div>
                        <div className={'nav_Con'}>{
                            this.state.pictures1.map((x)=>
                            (
                                <div className={'nav_picture'}><img src={x}></img>
                                <p className={'nav_bottom'}>标题<br></br>发布者</p>
                                </div>
                            ))}
                        </div>
                        <div className={'nav_Con'}>{
                            this.state.pictures1.map((x)=>
                            (
                                <div className={'nav_picture'}><img src={x}></img>
                                <p className={'nav_bottom'}>标题<br></br>发布者</p>
                                </div>
                            ))}
                            </div>
                            <div className={'nav_Con'} id={'last'}>{
                            this.state.pictures1.map((x)=>
                            (
                                <div className={'nav_picture'} ><img src={x}></img>
                                <p className={'nav_bottom'}>标题<br></br>发布者</p>
                                </div>
                            ))}
                            </div>
                            </div>                        
                        : 
                        
                            <div id='person_pic'>
                                {
                                    this.state.pictures2.map((item)=>(
                                        <div className={'person_img'}>
                                            <img className='high' src={item.pictu}></img>
                                            <p>{item.pas}</p>
                                            <div className='person_buttom'>
                                                <img className={'run'} src={run}></img>
                                                <span className={'person_left'}>{item.num1}</span>
                                                <span className={'person_right'}>{item.date}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        
                    
                        }
                   </>
                )
            }
        }
}

export default Content;
