import React, { Component } from 'react';
import Personalized from  './../components/Personalized'
import ListMobule from './../components/lists/ListMobule'
import { Button,Icon,Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      listMobule : [
        {
          title:'推荐歌单',
          lists:[
            {
              title:'每日歌曲推荐',
              palyCount:'5170000',
              content:'推荐的歌曲',
              img:"http://p1.music.126.net/BRP-eNix_Z4KDcdfyejh3w==/109951162888093187.jpg?param=140y140"
            },
            {
              title:'麻麻，我想和他们合唱！我想和你唱特辑',
              palyCount:'2870000',
              content:'编辑推荐，综艺《我想和你唱特辑》',
              img:"http://p1.music.126.net/IFP6UakM1Nx0igYoQAxUJQ==/109951162922803040.jpg?param=140y140"
            },
            {
              title:'性感律动♫丨Feel Da Vibe~',
              palyCount:'5170000',
              content:'性感律动♫丨Feel Da Vibe~',
              img:"http://p1.music.126.net/QZ8rjr6ROZul00MaYCp3XA==/18715886929908427.jpg?param=140y140"
            },
            {
              title:'耳 朵 喜 欢 你',
              palyCount:'5170000',
              content:'耳 朵 喜 欢 你',
              img:"http://p1.music.126.net/YLl37Ld2AYCnp--PCKGL2g==/109951162897420006.jpg?param=140y140"
            },
            {
              title:'青春没有“恢复出厂设置”这个选项',
              palyCount:'5170000',
              content:'青春没有“恢复出厂设置”这个选项',
              img:"http://p1.music.126.net/jx3hYkiKuiyArTUtTsBecg==/18523472395039404.jpg?param=140y140"
            },
            {
              title:'狼人杀发言BGM',
              palyCount:'50000',
              content:'狼人杀发言BGM',
              img:"http://p1.music.126.net/QRJM6hN3JbYHFbUqqKfb9g==/18825838092547935.jpg?param=140y140"
            },
            {
              title:'琵琶行-奇然&沈谧仁',
              palyCount:'3370000',
              content:'琵琶行-奇然&沈谧仁',
              img:"http://p1.music.126.net/nRW6CzJ54uQJfjV3zTRRbA==/18872017579260866.jpg?param=140y140"
            },
            {
              title:'小情书LOVOTE',
              palyCount:'70000',
              content:'小情书LOVOTE',
              img:"http://p1.music.126.net/UNvc_BHLkLpeo_WBybOrGQ==/18869818555916207.jpg?param=140y140"
            },
            {
              title:'第一季 - 它（3）',
              palyCount:'5870000',
              content:'第一季 - 它（3）',
              img:"http://p1.music.126.net/h9UvayWfJQ1Wq38wEydcmA==/19165587183823099.jpg?param=140y140"
            },
            {
              title:'BEST SELECTION "blanc"',
              palyCount:'3670000',
              content:'BEST SELECTION "blanc"',
              img:"http://p4.music.126.net/G8ir4-t97vPtVKIeXtFUzQ==/18545462627597044.jpg?param=100y100"
            }
          ]
        },
        {
          title:'热门新碟',
          lists:[
            {
              title:'猎户星座',
              palyCount:'5670000',
              content:'猎户星座',
              img:"http://p3.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130"
            },
            {
              title:'我想和你唱 第二季 第2期',
              palyCount:'7870000',
              content:'我想和你唱 第二季 第2期',
              img:"http://p4.music.126.net/64QlOPmukhu84pLUlChTng==/19185378393181726.jpg?param=130y130"
            },
            {
              title:'Eyes Closed',
              palyCount:'230000',
              content:'Eyes Closed',
              img:"http://p3.music.126.net/jgMXOYOSw-DgZpkWlDqMoA==/18979769718782718.jpg?param=130y130"
            },
            {
              title:'Guardians of the Galaxy: Awesome Mi',
              palyCount:'50000',
              content:'Guardians of the Galaxy: Awesome Mix',
              img:"http://p4.music.126.net/sCmlogyXI3bF1kWZviuWLw==/18973172648993092.jpg?param=130y130"
            },
            {
              title:'2017跨界歌王 第四期',
              palyCount:'170000',
              content:'2017跨界歌王 第四期',
              img:"http://p4.music.126.net/6UaTtZH4IrOR2JV1hiGdUg==/19207368625731830.jpg?param=130y130"
            },
            {
              title:'WONDER IF',
              palyCount:'5890000',
              content:'WONDER IF',
              img:"http://p4.music.126.net/MDiXa-FfTiGKdDY7gSMokw==/18870918067627666.jpg?param=130y130"
            },
            {
              title:'Humanz (Deluxe)',
              palyCount:'170000',
              content:'Humanz (Deluxe)',
              img:"http://p3.music.126.net/cf99w41pn-t_z9ixyMxv2g==/19136999881485405.jpg?param=130y130"
            },
            {
              title:'Thunder',
              palyCount:'970000',
              content:'Thunder',
              img:"http://p4.music.126.net/us8SjZfWTGG-jYzSuJ3w0A==/18545462627590863.jpg?param=130y130"
            },
            {
              title:'告别之后',
              palyCount:'70000',
              content:'告别之后',
              img:"http://p3.music.126.net/R4_ojXIZGKLW5rYOEeinsQ==/18892908300187603.jpg?param=130y130"
            },
            {
              title:'23',
              palyCount:'5170000',
              content:'23',
              img:"http://p1.music.126.net/IFP6UakM1Nx0igYoQAxUJQ==/109951162922803040.jpg?param=140y140"
            }
          ]
        }
      ]
    }
  }
  componentWillMount(){

  }
  render(){
    const data= []
    this.state.listMobule.forEach((value,index) =>{
      return data.push(
        <ListMobule key={index} List = {value} />
      )
    })
    return(
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="个性推荐" key="1"><Personalized/></TabPane>
            <TabPane tab="歌单" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="主播电台" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="排行榜" key="4">Content of Tab Pane 4</TabPane>
            <TabPane tab="歌手" key="5">Content of Tab Pane 5</TabPane>
            <TabPane tab="最新音乐" key="6">Content of Tab Pane 6</TabPane>
          </Tabs>
          {data}
        </div>
    )
  }
}
export  default Home;
