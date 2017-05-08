import React,{ Component } from 'react'
import {Icon} from 'antd'
import './../style/container.less'
class PalyMin extends Component{
  static propTypes  = {
    img :React.PropTypes.string,
    name:React.PropTypes.string,
    songer:React.PropTypes.string
  }
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    console.log(this.props)
    return(
      <div className="playmin">
        <div className="playmin-img">
          <img src={this.props.img} />
          <div className="to-lyric">
            <Icon type="arrows-alt" />
          </div>
        </div>
        <div className="playmin-detail">
          <div>{this.props.name}</div>
          <div>{this.props.songer}</div>
        </div>
        <div className="playmin-operation">
          <Icon type="heart-o" />
          <Icon type="delete" />
        </div>
      </div>
    )
  }
}
export default PalyMin
