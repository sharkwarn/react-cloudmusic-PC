import React,{ Component } from 'react'
import getDate from './dispatch'

class MV extends Component{
  componentWillMount (){
    var data = getDate(123456,'xiaowu')
    console.log(data)
  }
  render(){
    return(
      <div>mv</div>
    )

  }
}
export default MV
