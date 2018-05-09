import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
		 <div className="about-con">
			<h2>找到属于你的一路上的伙伴</h2>
			<p className="small-text">是一家专注于通过移动互联网应用以及跑步社交运动和线下赛事活动，为中国跑步爱好者提供全方位服务的高科技企业。2014年成立于动域资本等多家机构数千万美元投资。截至2017年2月，用户总数突破3000万，同时举办超过150场线下活动和赛事，覆盖全国60多座城市。我们的愿景是让中国人愉悦健康的跑起来，立志成为全新跑步生活方式提供者和倡导者。</p>
		    <div className="about-pic"><img src="../assets/images/company.jpg"/></div>
		    <h2>合作伙伴</h2>
		    <ul className="frienk">
				<li><a href=""><img src="../assets/images/about_03_00.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_01.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_02.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_03.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_04.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_05.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_06.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_07.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_08.png"/></a></li>
				<li><a href=""><img src="../assets/images/about_03_09.png"/></a></li>
			</ul> 
		   <div className="contact">
		   	   <h2>联系我们</h2>
		   	   <div className="contact-one red">
		   	   	   <h2>广州</h2>
		   	   	   <p>广东省广州市顺德区元岗路180号智汇创意园独栋2号</p>
		   	   	   <p>400-123-456</p>
		   	   </div>
		   	   <div className="contact-one red">
		   	   	   <h2>广州</h2>
		   	   	   <p>广东省广州市顺德区元岗路180号智汇创意园独栋2号</p>
		   	   	   <p>400-123-456</p>
		   	   </div>
		   	   <div className="contact-one blue">
		   	   	   <p>商务合作:  1135800463@qq.com</p>
		   	   	   <p>赛事合作:  1135800463@qq.com</p>
		   	   	   <p>跑团合作:  1135800463@qq.com</p>
		   	   	   <p>国际旅游:  1135800463@qq.com</p>
		   	   	   <p>线上渠道:  1135800463@qq.com</p>
		   	   	   <p>客服反馈:  1135800463@qq.com</p>
		   	   </div>
		   </div>
		</div>
    );
  }
}

export default Head;