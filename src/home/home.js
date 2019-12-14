import React from 'react'
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import '../css/default.scss'

function Home() {
    return(
        <>
           <Header />
           <Main />
           <Footer/>
        </>
    );
}

export default Home