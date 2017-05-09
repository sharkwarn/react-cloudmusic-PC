import React, { Component } from 'react';
import {  BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Home from './Home'
import AsideList from './AsideList'
import PersonalFm from './../components/PersonalFm'
import MV from './../components/MV'
import LoacalMusic from './../components/LocalMusic'
import Friends from './../components/Friends'
import DownloadMusic from './../components/DownloadMusic'
import MyYun from './../components/MyYun'
import MySonger from './../components/MySonger'
import MyMV from './../components/MyMV'
import MyAudio from './../components/MyAudio'
import './../style/container.less'
class Container extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        active: 1,
      }
    }
    handleClick(){
      console.log(event.target)
    }
    render(){
        return(
          <div className="container">
            <AsideList/>
            <div className="container-main">
              <Route  exact={{false}} path="/" component={Home}/>
              <Route path="/PersonalFm" component={PersonalFm}/>
              <Route path="/MV" component={MV}/>
              <Route path="/Friends" component={Friends}/>
              <Route path="/LoacalMusic" component={LoacalMusic}/>
              <Route path="/DownloadMusic" component={DownloadMusic}/>
              <Route path="/MyYun" component={MyYun}/>
              <Route path="/MySonger" component={MySonger}/>
              <Route path="/MyMV" component={MyMV}/>
              <Route path="/MyAudio" component={MyAudio}/>
            </div>
          </div>
        )
    };
}
export  default Container;
