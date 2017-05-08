import React,{Component} from 'react';
import Audio from './audio/Audio'
import {Icon} from 'antd';
import { Progress } from 'antd';
import './../style/footer.less';
class Footer extends Component{
  constructor(props){
    super(props)
    this.state = {
      play: false,
      volume: 100
    }
  }
  handleClick(){
    this.setState({
      play:!this.state.play
    })
  }
  volumeReduce(){
    if( this.state.volume <= 0 ){
      return
    }else{
      this.setState({
        volume: --this.state.volume
      })
    }

  }
  volumeAdd(){
    if( this.state.volume <= 0 ){
      return
    }else{
      this.setState({
        volume: ++this.state.volume
      })
    }
  }
  render(){
    return(
        <div className='footer'>
          <div className='footer-play'>
              <Icon type="left-circle" style={{fontSize:'30px'}} />
              <div onClick={this.handleClick.bind(this)}>
                {
                  this.state.play == false ?  <Icon type="play-circle" style={{fontSize:'35px'}} /> :  <Icon type="pause-circle" style={{fontSize:'35px'}} />
                }
              </div>
              <Icon type="right-circle" style={{fontSize:'30px'}} />
          </div>
          <Audio play={this.state.play} addsound={this.volumeAdd.bind(this)} reducesound={this.volumeReduce.bind(this)} volumeNum={this.state.volume}/>
        </div>
    )
  }
}
export default Footer
