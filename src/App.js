import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

// 装饰器模式
@connect(
  //你要state什么属性放到props里
  state=>({ num: state.counter}),
  //你要什么方法放到props
  {addGun, removeGun, addGunAsync}
)
class App extends Component {
  render() {
    return (
      <div >
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>添加机枪</button>
        <button onClick={this.props.removeGun}>减少机枪</button>
        <button onClick={this.props.addGunAsync}>拖两天添加机枪</button>
      </div>
    );
  }
}

export default App;
