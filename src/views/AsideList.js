import React, { Component } from 'react';
import './../style/container.less'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import PlayMin from './../components/PlayMin'
class AsideList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list1 : [
        ['aside-1','发现音乐',"/"],
        ['aside-2','私人FM',"/PersonalFm"],
        ['aside-3','MV',"/MV"],
        ['aside-4','朋友',"/Friends"],
      ],
      list2 : [
        ['aside-5','本地音乐',"/LoacalMusic"],
        ['aside-6','下载管理',"/DownloadMusic"],
        ['aside-7','我的音乐云盘',"/MyYun"],
        ['aside-8','我的歌手',"/MySonger"],
        ['aside-9','我的MV',"/MyMV"],
        ['aside-10','我的电台',"/MyAudio"],
      ],
      active: "aside-1"
    }
  }
  handleClick(id){
    console.log(id)
    this.setState({
      active:id
    })
  }
  componentWillMount(){

  }
  render(){
    const data = [];
    data.push(
      <span  key='aside-title-1'>推荐</span>
    )
    this.state.list1.forEach((value,i)=>{
      data.push(
        <div key={value[0]} onClick={this.handleClick.bind(this,value[0])} className="list">
          <div  className={this.state.active == value[0] ? 'active' : ''} ><Link to={value[2]}>{value[1]}</Link></div>
        </div>
      )
    })
    data.push(
      <span  key='aside-title-2'>我的音乐</span>
    )
    this.state.list2.forEach((value,i)=>{
      data.push(
        <div  key={value[0]}  className="list">
          <div className={this.state.active == value[0] ? 'active' : ''}  onClick={this.handleClick.bind(this,value[0])}><Link to={value[2]}>{value[1]}</Link></div>
        </div>
      )
    })
    return(
        <div className='container-aside' >
          {data ? data : ""}
          <PlayMin img="http://p3.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg?param=130y130" name="See You Again" songer="Charlie Puth"/>
        </div>
    )
  };
}
export  default AsideList;
