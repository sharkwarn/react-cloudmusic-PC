import React,{Component} from 'react';
import { Button,Icon,Tabs } from 'antd';

class ListMobule extends Component{
  static propTypes  = {
    List: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    const data = []
    this.props.List.lists.forEach((value,index) => {
      data.push(
        <div key={index} className="container-list-content-box">
          <div>
            <img  src={value.img} />
            <div className="hidden-content">{value.content}</div>
            <Icon className="icon-play" title="播放" type="play-circle-o" />
          </div>
          <p>{value.title}</p>
        </div>
      )
    })
    return(
      <div style={{padding:"15px 0"}}>
        <div className='container-list-tit'>
          <span>{this.props.List.title}</span>
          <em>更多>></em>
        </div>
        <div className='container-list-content'>
          {data}
        </div>
      </div>
    )
  }
}
export default ListMobule
