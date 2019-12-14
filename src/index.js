import React from 'react'
import ReactDOM from 'react-dom';
import Home from "./home/home";
import MainPage from "./mainPage/MainPage";
import Search from './Search/search'
import Sign from './Sign up/Sign'
import Video from './Video/Video'
class App extends React.Component{

    render() {
        return(
            //<Video></Video>
            //<Sign></Sign>
            
            
            //<Search></Search>
            //<Home/>
            <MainPage/>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));