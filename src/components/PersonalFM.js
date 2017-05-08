import React,{ Component } from 'react'
import './../style/personalFm.less'
import { Button,Icon,Modal,Input} from 'antd';

class PersonalFm extends Component{
  constructor(props){
    super(props)
    this.state = {
      lyric:'作曲 : Wiz Khalifa,作词 : Wiz Khalifa,It\'s been a long day without you my friend,没有老友你的陪伴 日子真是漫长,And I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,We\'ve come a long way from where we began,回头凝望 我们携手走过漫长的旅程,Oh I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,When I see you again,与你重逢之时,Damn who knew all the planes we flew,谁会了解我们经历过怎样的旅程,Good things we\'ve been through,谁会了解我们见证过怎样的美好,That I\'ll be standing right here,我都会在这里,Talking to you about another path,与你聊聊另一种选择的可能,I know we loved to hit the road and laugh,我懂我们都喜欢速度与激情,But something told me that it wouldn\'t last,但有个声音告诉我 这美好并不会永恒,Had to switch up look at things different see the bigger picture,如何才能改变观点 用更宏观的视野看这世界,Those were the days hard work forever pays,有付出的日子终有收获的时节,Now I see you in a better place,此刻 我看到你走进更加美好的未来,How could we not talk about family when family\'s all that we got?,当家人已是我们唯一的牵绊时 我们怎么能忘却最可贵的亲情,Everything I went through you were standing there by my side,无论历经怎样的艰难坎坷 总有你相伴陪我度过,And now you gonna be with me for the last ride,而今你将陪我走完这最后一段旅程,It\'s been a long day without you my friend,没有老友你的陪伴 日子真是漫长,And I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,We\'ve come a long way from where we began,回头凝望 我们携手走过漫长的旅程,Oh I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,When I see you again,与你重逢之时,First you both go out your way,从一开始你就努力走自己的路,And the vibe is feeling strong and what\'s small turn to a friendship,然后你我的感情愈加真实强烈 再渺小的东西也能让我们的友谊更高价深厚,a friendship turn into a bond and,深厚的友情蜕成血浓于水的感情,that bond will never be broke and the love will never get lost,此情不变 此爱难逝,And when brotherhood come first then the line,莫逆之交的我们 绝不会背叛彼此,Will never be crossed established it on our own,只因这深情厚谊基于我们真实意愿,When that line had to be drawn and that line is what we reach,这友谊让我们肝胆相照 荣辱与共,So remember me when I\'m gone,即便我离去 也请将我铭记,How could we not talk about family when family\'s all that we got?,当家人已是我们唯一的牵绊时 我们怎么能忘却最可贵的亲情,Everything I went through you were standing there by my side,无论历经怎样的艰难坎坷 总有你相伴陪我度过,And now you gonna be with me for the last ride,而今你将陪我走完这最后一段旅程,Let the light guide your way,就让那光芒引导你的前路,Hold every memory as you go,当你走的时候 请留住所有的美好瞬间,And every road you take will always lead you home,这样的话不论你选择哪条路 它都会引领你回家,Hoo,吼~~~,It\'s been a long day without you my friend,没有老友你的陪伴 日子真是漫长,And I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,We\'ve come a long way from where we began,回头凝望 我们携手走过漫长的旅程,Oh I\'ll tell you all about it when I see you again,与你重逢之时 我会敞开心扉倾诉所有,When I see you again,与你重逢之时,Again,与你重逢之时,When I see you again see you again,与你重逢之时,When I see you again,与你重逢之时',
      visible: false,
      comment:[
        {
          name:'朱良灿',
          logo:'http://p1.music.126.net/tLrudZRYGKI-lfombtZ1Vg==/7818627185143674.jpg?param=50y50',
          content:'就在保罗沃克去世前13天，我高中最好的一个兄弟也因为意外去世了。曾经一起在寝室看了速度1，之后一起看了速度5速度6。曾经也同样挚爱速度与激情。今天去看了第七部，保罗沃克不在了。我兄弟也不在了。当听到这首see you again真的眼眶湿润了。献给保罗沃克，献给我的兄弟！',
          date:'2015年4月12日',
          agree:'257864'
        },
        {
          name:'Mayday0815',
          logo:'http://p1.music.126.net/ad7-eTCoe4TgBCeNlyRVtQ==/2924700930090566.jpg?param=50y50',
          content:'微博上看到的：“本以为保罗沃克去世了，这部里导演编剧会安排他的角色死掉，跟观众来个彻底的告别。但他们却没有，反而是让布莱恩带着微笑道别，和家人永远幸福地留在了电影里。电影真好，可以忽略现实里的不幸与痛苦，留一片永远美好单纯的桃源。真好。”人生岔口，你先转弯，我们终点，还会再遇见！',
          date:'2015年4月13日',
          agree:'157864'
        },
        {
          name:'老大不小的陈三岁',
          logo:'http://p1.music.126.net/InidkBPMu45IJOp4Z3a_UQ==/18821440045917841.jpg?param=50y50',
          content:'t\'s been a long day without youmy friend吾之挚友，无见许久And I\'ll tell you all about itwhen I see you again君影若现，诉之怀悠We\'ve come a long way from where',
          date:'2015年3月24日',
          agree:'257864'
        },
        {
          name:'孤独君-',
          logo:'http://p1.music.126.net/T8vfr15FjfrqVQ_PoIUtXw==/3388694839646921.jpg?param=50y50',
          content:'纪念保罗沃克永远的速度与激情。那年那个能用微笑征服世界的少年。走好。。不忘11.30。',
          date:'2015年3月24日',
          agree:'257864'
        },
        {
          name:'Ars晟祯',
          logo:'http://p1.music.126.net/G2_-seVPFH6yuCoh3jZ8BQ==/109951162869259757.jpg?param=50y50',
          content:'We are not a team,We are a family',
          date:'2016年3月12日',
          agree:'257864'
        },
        {
          name:'大Hee',
          logo:'http://p1.music.126.net/mRHsvvnegJediiD4ZWUHGw==/3236962232763515.jpg?param=50y50',
          content:'这首歌会不会到时候在结尾放',
          date:'2017.04.08',
          agree:'257864'
        }
      ]
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    // this.setState({
    //   comment : this.state.comment.push({name:'朱良灿',logo:'http://p3.music.126.net/GBZK6PbxkgVvofsdAm16Yw==/3253454907617454.jpg?param=50y50',conent:this.refs.addEvluate.value})
    // })
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  render(){
    const lyricArr  = []
    this.state.lyric.split(',').forEach((value,index) => {

      lyricArr.push(
        <p key={index}>
          {value}
        </p>
      )
    })
    const commentArr = []
    this.state.comment.forEach((value,index) => {
      commentArr.push(
        <div key={index} className='comment-list'>
          <div className='comment-logo'>
            <img src={value.logo} />
          </div>
          <div className='comment-content'>
            <div className="comment-text">
              <span>{value.name}：</span><em>{value.content}</em>
            </div>
            <div className="comment-date">
              <span>{value.date}</span>
              <em>{value.agree}</em>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="personalFm">
        <div className="personalFm-song">
          <div className="personalFm-play">
            <img src="http://p1.music.126.net/JIc9X91OSH-7fUZqVfQXAQ==/7731765766799133.jpg?param=130y130" />
          </div>
          <div className="personalFm-lyric">
            <div className='song-header'>
              <div className="name">
                <span>See You Again</span>
              </div>
              <div className="detail">
                <span>专辑：</span><a href="javascript:;" >Furious 7  </a>
                <span>歌手：</span><a href="javascript:;">Charlie Puth </a>
              </div>
            </div>
            <div className="song-lyric">
              {
                lyricArr
              }
            </div>
          </div>
        </div>
        <div className="personalFm-evluate">
          <div className="personalFm-tit">
            <span>听友评价</span><em>已有1839条评论</em>
          </div>
          <div className="personalFm-eva-input">
            <div onClick={this.showModal.bind(this)}>
              <Icon type="tag-o" style={{float:'left',marginLeft:'10px',marginRight:'10px',lineHeight:'30px'}} />
              <span style={{float:'left'}}>发表评论</span>
              <Icon style={{float:'right',marginRight:'10px',lineHeight:'30px'}} type="smile-o" />
            </div>
          </div>
          <div className="personalFm-eva-list">
            {
              commentArr
            }
          </div>
        </div>
        <Modal title="添加评论" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <Input ref="addEvluate" type="textarea" rows={4} />
        </Modal>
      </div>
    )
  }
}
export default PersonalFm
