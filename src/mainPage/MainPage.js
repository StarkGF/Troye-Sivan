import React from 'react'
import Header from "./header";
import Footer from './footer'
import Msearch from "./Msearch";
import '../css/default.scss'
import Fengmian from "./fengmian";
import Fenqu from "./fenqu";
import fenqu1 from '../static/mainPage/container/分区一图标.png'
function MainPage() {
    return(
        <>
            <Header />
            <div className={'MMain'}>
                <Msearch />
                <Fengmian />
                <Fenqu MfqTitleImg={fenqu1} MfqTitle={'分区一'}/>
                <Fenqu MfqTitleImg={fenqu1} MfqTitle={'分区二'}/>
            </div>
            <Footer />
        </>
    );

}

export default MainPage