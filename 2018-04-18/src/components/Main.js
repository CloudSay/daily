import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
		<div className="main">
			<h2>在这里，你不是一个人</h2>
			<ul className="part-one">
				<li>
					<img src="../assets/images/02_01.png" />
					<div className="text">
						<span>1500</span>个
					</div>
					<p>跑过的城市</p>
				</li>
				<li>
					<img src="../assets/images/02_02.png" />
					<div className="text">
						<span>120000W</span>公里
					</div>
					<p>坚持的脚步</p>
				</li>
				<li>
					<img src="../assets/images/02_03.png" />
					<div className="text">
						<span>200000W</span>小时
					</div>
					<p>做着同样的事情</p>
				</li>
				<li>
					<img src="../assets/images/02_04.png" />
					<div className="text">
						<span>3000W</span>人
					</div>
					<p>和你在一起</p>
				</li>
			</ul>
			<h2>每一步，悦跑与你同行</h2>
			<ul className="part-two">
				<li>
					<img src="../assets/images/03_00.png" />
					<h2>精确GPS轨迹记录</h2>
					<p>通过移动设备ＧＰＳ芯片数据，实时记录您的运动轨迹，独有算法让数据误差更低</p>
				</li>
				<li>
					<img src="../assets/images/03_01.png" />
					<h2>数据防作弊系统</h2>
					<p>独有的防作弊系统，杜绝一切恶意刷数据行为，捍卫跑步精神</p>
				</li>
				<li>
					<img src="../assets/images/03_02.png" />
					<h2>训练项目</h2>
					<p>科学的跑步计划，加速提升训练效果，助你突破每一个里程碑</p>
				</li>
				<li>
					<img src="../assets/images/03_03.png" />
					<h2>专业化运动数据分析</h2>
					<p>多维度数据分析科学，调整自己的跑步节奏，保障健康训练与突破</p>
				</li>
				<li>
					<img src="../assets/images/03_04.png" />
					<h2>精英挑战计划</h2>
					<p>参与挑战完成任务，放肆跑，放肆练，挑战自我极限</p>
				</li>
				<li>
					<img src="../assets/images/03_00.png" />
					<h2>马拉松赛事直播</h2>
					<p>实况直播你就是主角，在这里，跑步并不孤独！敬请期待！</p>
				</li>
			</ul>
			<h2>每一个脚印，都是对自己的肯定</h2>
			<ul className="part-three">
				<li>
					<div className="wenzi">
						<h3>勋章荣耀之殿</h3>
						<p>每分努力 每滴汗水</p>
						<p>每个特殊时刻</p>
						<p>悦跑伴你铭记</p>
					</div>
					<img src="../assets/images/m-part3-1.png" />
				</li>
				<li>
					<div className="wenzi">
						<h3>勋章荣耀之殿</h3>
						<p>每分努力 每滴汗水</p>
						<p>每个特殊时刻</p>
						<p>悦跑伴你铭记</p>
					</div>
					<img src="../assets/images/m-part3-2.png" />
				</li>
				<li>
					<div className="wenzi">
						<h3>勋章荣耀之殿</h3>
						<p>每分努力 每滴汗水</p>
						<p>每个特殊时刻</p>
						<p>悦跑伴你铭记</p>
					</div>
					<img src="../assets/images/m-part3-3.png" />
				</li>
		    </ul>
		    <h2>跑步并不孤独</h2>
		    <div className="person">
		    	<div className="person-1"><img src="../assets/images/head3.png"/></div>
		    	<div className="person-2"><img src="../assets/images/head5.png"/></div>
		    	<div className="person-3"><img src="../assets/images/head4.png"/></div>
		    	<div className="person-4"><img src="../assets/images/head2.png"/></div>
		    	<div className="person-5"><img src="../assets/images/head1.png"/></div>
		    </div>
		    <div className="img">
		    	<img src="../assets/images/m-part6-bg.jpg" />
		    </div>
        </div>
		
    );
  }
}

export default Main;