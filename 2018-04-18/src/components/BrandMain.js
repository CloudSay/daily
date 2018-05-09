import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class Main extends Component {
  render() {
    return (
		<div className="main">
			<div className="brand">
				<h2>申请跑团</h2>
				<p className="small-text">建立跑团能给我们带来什么? </p>
				<p className="small-text">优先体验产品最新功能、为跑团成员导入其他跑步软件的数据、受邀参观公司总部。 </p>
				<p className="small-text">得到更多签约知名运动品牌的机会，如UA、Adidas、Saucony、ZAMST 等。</p>
				<p className="small-text">跑团活动将得到官方强力支持与赞助：高品质物料设计、线上技术支持。国际及国内优质知名赛事名额赞助。跑团专属定制功能服务。</p>
				<p className="small-text">加入跑团，从现在跑起！</p>
				<Link to='/reg'>我要申请</Link>
			</div>
			<div className="brand brand2">
				
				<h2>跑团管理</h2>
				<p className="small-text">精准的跑步数据分析，专业、便捷的管理方案。</p>
				<p className="small-text">为跑团提供全方位的组织服务平台和赛事技术服务。 </p>
				<p className="small-text">实现跑团管理数字化、服务互联网化，让跑团管理更轻松。</p>
				<Link to='/login'>登录</Link>
			</div>
		</div>
    );
  }
}

export default Main;