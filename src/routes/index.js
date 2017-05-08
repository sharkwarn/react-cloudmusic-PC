//routes/index.js
import React,{Component} from 'react';
//import { BrowserRouter, Route } from 'react-router'
//import { Router, Route } from 'react-router';
//HashRouter  react-router 在V4的版本中的修改
import {  BrowserRouter as Router,Route,Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Container from '../views/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './../style/common.less';
class Index extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Router>
         <div className="box">
           <Header></Header>
           <Container></Container>
           <Footer></Footer>
         </div>
       </Router>
    )
  }
}
export default Index
