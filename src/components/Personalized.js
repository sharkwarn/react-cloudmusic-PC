import React,{Component} from 'react'
import { Carousel } from 'antd';
import './../style/personalized.less';

class Personalized extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount(){
    // fetch('http://music.163.com/api/song/detail/?id=28377211&ids=%5B28377211%5D',{
    //   method:'post',
    //   mode:'cors',
    //   headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   "Cookie":"appver=1.5.0.75771",
    //   "Referer":"http://music.163.com/"
    // },
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   console.log(data);
    // }).catch(function(e) {
    //   console.log("Oops, error");
    // });
  }
  render(){
    return(
      <div>
        <div className='lunbobox'>
          <div className="lunbo" >
            <Carousel autoplay className='lunbo2'>
              <div><img width="810" height="300" src="http://p3.music.126.net/cJ6IRnOqo0jjrufRdpnplg==/19118308183887779.jpg"/></div>
              <div><img width="810" height="300" src="http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg"/></div>
              <div><img width="810" height="300" src="http://p3.music.126.net/Dgh1QkS7jv1Abtz_ygSefA==/19244752021068776.jpg"/></div>
              <div><img width="810" height="300" src="http://p3.music.126.net/hEQX2ljuolNQcrfvJFZgsA==/18833534674071239.jpg"/></div>
              <div><img width="810" height="300" src="http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg"/></div>
              <div><img width="810" height="300" src="http://p4.music.126.net/edDsvu2V8qva372i4zi4Bw==/18896206835073570.jpg"/></div>
              <div><img width="810" height="300" src="http://p4.music.126.net/vqd-bod6GKnu2hdNomLelA==/18527870441550017.jpg"/></div>
              <div><img width="810" height="300" src="http://p3.music.126.net/Dgh1QkS7jv1Abtz_ygSefA==/19244752021068776.jpg"/></div>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}
export default Personalized
