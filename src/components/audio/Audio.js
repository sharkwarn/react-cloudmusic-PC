import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Icon} from 'antd';
import { Progress } from 'antd';
import './../../style/footer.less';
class Audio extends Component{
  constructor(props){
    super(props)
    this.state = {
      times : 0,
      duration:0,
      durationNum:1
    }
  }
  componentDidMount(){
    this.refs.myAudio.src = 'http://218.12.233.21/m10.music.126.net/20170509001336/5a375b6c08c89c4a32a854729876f255/ymusic/6517/af36/8fef/59653a7de4dfc7b2271701cfe317c614.mp3?wshc_tag=1&wsts_tag=59109399&wsid_tag=7b74f574&wsiphost=ipdbm';
    this.props.play == true ? this.refs.myAudio.play() : this.refs.myAudio.pause()
    this.refs.myAudio.loop = true;
    this.refs.myAudio.preload = true;
  }
  TimeChange(){
    //console.log(this.refs.myAudio.currentTime )
    this.setState({
      times:this.refs.myAudio.currentTime
    })
  }
  getDuration(){
    var dom = ReactDOM.findDOMNode(this.refs.myAudio);
    console.log(dom.duration)
    const fen = Math.floor(dom.duration/60) > 9 ? Math.floor(dom.duration/60)+ "" : "0" + Math.floor(dom.duration/60);
    const miao = Math.floor(dom.duration%60) > 9 ? Math.floor(dom.duration%60)+ "" : "0" + Math.floor(dom.duration%60);
    this.setState({
      duration:fen+":"+miao,
      durationNum:dom.duration
    })
  }
  render(){
    const fen = Math.floor(this.state.times/60) > 9 ? Math.floor(this.state.times/60)+ "" : "0" + Math.floor(this.state.times/60);
    const miao = Math.floor(this.state.times%60) > 9 ? Math.floor(this.state.times%60)+ "" : "0" + Math.floor(this.state.times%60);
    let PercentageTime
    if( this.state.durationNum ){
      PercentageTime =Math.ceil((this.state.times/this.state.durationNum)*100)
    }else{
      PercentageTime = 0
    }
    return(
      <div className="footer-play-prog">
        <div className='footer-prog'>
            <div>{fen+":"+miao}</div>
            <div style={{marginRight:"5px"}}><Progress percent={PercentageTime} showInfo={false} strokeWidth={6} status="active"/></div>
            <div>{this.state.duration}</div>
        </div>
        <div className='footer-sound'>
            <div><Icon type="sound" /></div>
            <div><Icon type="minus" onClick={this.props.reducesound}/></div>
            <div><Progress percent={this.props.volumeNum} showInfo={false} strokeWidth={6} status="active"/></div>
            <div><Icon type="plus" onClick={this.props.addsound} /></div>
        </div>
        <audio ref="myAudio" onTimeUpdate = {this.TimeChange.bind(this)} onCanPlay = {this.getDuration.bind(this)}></audio>
      </div>
    )
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    nextProps.play == true ? this.refs.myAudio.play() : this.refs.myAudio.pause()
    this.refs.myAudio.volume = this.props.volumeNum/100;
  }
}
export default Audio
