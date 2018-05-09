import React, {
	Component
} from 'react';
import '../assets/css/user.css'
class User extends Component {
	render() {
			return(
					<div className="mall_main">
						<div id="child_header">
						    <div className="goback"><a href="javascript:history.back(-1)"><i></i></a></div>
						    <div className="current_location"><span>个人中心</span></div>
						</div>
						<div className="wx_wrap">
						    <a href="user_info.html">
						        <div className="person_top">
						            <img className="top_bj" src="assets/images/top_bj.jpg"/>
						            <div className="per_con">
						                <div className="user_photo">
						                	<img src={this.props.data.data.src}/>
						                    <span>{this.props.data.data.username}</span>
						                </div>
						                <div className="name_right">
						                    <p className="p1">会员ID：{this.props.data.data.ID}</p>
						                    <p>注册时间：{this.props.data.data.time}</p>
						                    <p>会员级别：{this.props.data.data.class}</p>
						                    <p className="p2">积分值：{this.props.data.data.integral}</p>
						                </div>
						            </div>
						        </div>
						    </a>
							<div className="my_menu">
								<ul>
									<li className="li_list"><a href="order_list.html"><img src="assets/images/user_icon1.png"/> <span>我的订单</span></a></li>
									<li className="li_list"><a href="order_return.html"><img src="assets/images/user_icon2.png"/> <span>退货记录</span></a></li>
									<li className="li_list"><a href="order_refund.html"><img src="assets/images/user_icon3.png"/> <span>退款记录</span></a></li>
								</ul>
							</div>
							<ul className="menu_list"> 
								<li className="tiao" ><a href="address_list.html">地址管理</a></li>
								<li className="tiao" ><a href="wealth_center.html">财富中心</a></li>
								<li className="tiao"><a href="account_security.html">账户安全</a></li>
								<li className="tiao"><a href="my_collection.html">我的收藏</a></li>
								<li className="tiao"><a href="my_support.html">我的客服</a></li>
								<li className="tiao"><a href="points_list.html">我的积分</a></li>
								<li className="tiao"><a href="site.html">设置</a></li>
							</ul>
						</div>
					</div>
    );
  }
}

export default User;