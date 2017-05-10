import React,{Component} from 'react';
import './../../style/tops.less'
class Tops extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'暧昧',
      songer:'薛之谦',
      pick:'new'
    }
  }
  render(){
    const data = [];
    this.props.tops.forEach((value,index) =>{
      data.push(
      <div key={index} className="tops-list">
        <span>{index}</span>
        <span>{value.name}</span>
        <span>{value.pick}</span>
        <span>{value.songer}</span>
      </div>
    )
    })
    return(
      <div className='tops'>
        <div className="tops-tit">{this.props.tit}</div>
        {
          data
        }
        <div className="tops-more">
          查看全部>
        </div>
      </div>
    )
  }
}
export default Tops
