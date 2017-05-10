import React,{Component} from 'react'
import ListMobule from './lists/ListMobule'

class Recommend extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const data = []
    this.props.data.forEach((value,index) =>{
      return data.push(
        <ListMobule key={index} List = {value} />
      )
    })
    return(
      <div>
        {data}
      </div>
    )
  }
}
export default Recommend
