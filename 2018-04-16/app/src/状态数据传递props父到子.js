import React from 'react';
import ReactDom from 'react-dom';

//创建组件
class App extends React.Component{
  render(){
    let title=this.props.title;
    return (
      <div>
        <h3>str: {title}</h3>
        <div>num:  {this.props.title2 + 9}</div>
        <div>arr:  {this.props.arr}</div>
        <ul>
          {
            this.props.arr.map((val,index)=>{
              return <li key={index}>{val}</li>
            })
          }
        </ul>
        <div>json:{this.props.json.a}/{this.props.json.b}</div>

        {this.props.bl && <div>boolean</div>}
        {this.props.bl?<div>boolean2</div>:null}

        <Header arr = {this.props.arr} />
        <Wrap title={title}/>
        <Footer abc={'abc'}/>

      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return (
      <div>我是header组件</div>
    );
  }
}
class Wrap extends React.Component{
  render(){
    return <div>我是Wrap组件</div>;
  }
}
class Footer extends React.Component{
  render(){
    return <div>我是Footer组件</div>;
  }
}

// ReactDom.render(要渲染的组件,要注入的点,需要抓取,回调) 描画DOM
ReactDom.render(
  <App title="bmw" title2={110} arr={['a','b','c']} json={{a:1,b:2}} bl={true} />,
  document.querySelector("#app"),
  ()=>{console.log('描画DOM')}
);