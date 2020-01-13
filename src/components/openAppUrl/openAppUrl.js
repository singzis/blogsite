import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd-mobile'
import CallApp from 'callapp-lib';
import float_2 from '../../images/float_2.png'
import float_1 from '../../images/float_1.png'

const alert = Modal.alert

const ua = navigator.userAgent;
const doc = window.document;
const FULL_SCREEN = 'full-screen';
//判断是否是微信浏览器的函数
function isWeiXin() {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  const ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  onHide() {
    this.setState({
      show: false,
    });
  }
  show() {
    this.setState({
      show: true,
    });
  }
  downloadCallBack = (e) => {
    if (ua.indexOf('Android') > -1) {
      // 安卓
      alert('义采宝，让采购更轻松', '下载义采宝，发求购，找产品，采购批发分分钟搞定！', [
        { text: '容我想想', onPress: () => console.log('cancel') },
        { text: '前往义采宝', onPress: () => { window.location.href = "https://m.microants.cn/official-site/download"; } },
      ])
    } else {
      // ios
      alert('义采宝，让采购更轻松', '下载义采宝，发求购，找产品，采购批发分分钟搞定！', [
        { text: '容我想想', onPress: () => console.log('cancel') },
        { text: '前往义采宝', onPress: () => { window.location.href = "https://itunes.apple.com/cn/app/%E4%B9%89%E9%87%87%E5%AE%9D/id1180821282?mt=8"; } },
      ])
    }
  }
  render() {
    const { show } = this.state;
    // const rem = window.lib.flexible.rem;
    return (
      <div className="mask" style={{ display: `${show ? 'block' : 'none'}`}} onClick={this.onHide.bind(this)}>
        <img src={float_2} className="jiantou" alt=""/>
        <div className="floatColor floatLt">1.点击右上角</div>
        <div className="floatColor floatLb"><span>2.选择</span><img src={float_1} alt=""/><span>在浏览器中打开</span></div>
      </div>
    );
  }
}

Component.show = function show(path, prop, value) {
  //判断浏览器
  // const u = navigator.userAgent;
  // 引导用户在浏览器中打开
  if (isWeiXin()) {
    const refCallBack = function refCallBack(global) {
      Component.global = global;
    };
    if (!Component.global) {
      let wrapper = doc.getElementById(FULL_SCREEN);
      if (!wrapper) {
        wrapper = doc.createElement('div');
        wrapper.id = FULL_SCREEN;
        doc.body.appendChild(wrapper);
      }
      ReactDOM.render(<Component ref={refCallBack} />, wrapper);
    }
    Component.global.show();
    return;
  }
  const options = {
    scheme: {
      protocol: 'yicaibao',
    },
    appstore: 'https://itunes.apple.com/cn/app/%E4%B9%89%E9%87%87%E5%AE%9D/id1180821282?mt=8',
    yingyongbao: 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.microants.merchants',
    fallback: 'https://m.microants.cn/official-site/download',
    // timeout: 500,
  };
  const callLib = new CallApp(options);

  const params = {}
  if (prop && value) {
    params[prop] = value
  }

  callLib.open({
    param: params,
    path,
    callback: () => {
      if (ua.indexOf('Android') > -1) {
        // 安卓
        alert('义采宝，让采购更轻松', '下载义采宝，发求购，找产品，采购批发分分钟搞定！', [
          { text: '容我想想', onPress: () => console.log('cancel') },
          { text: '前往义采宝', onPress: () => { window.location.href = "https://m.microants.cn/official-site/download"; } },
        ])
      } else {
        // ios
        alert('义采宝，让采购更轻松', '下载义采宝，发求购，找产品，采购批发分分钟搞定！', [
          { text: '容我想想', onPress: () => console.log('cancel') },
          { text: '前往义采宝', onPress: () => { window.location.href = "https://itunes.apple.com/cn/app/%E4%B9%89%E9%87%87%E5%AE%9D/id1180821282?mt=8"; } },
        ])
      }
    }
  })
}

Component.hide = function hide() {
  if (Component.global) {
    Component.global.hide();
  }
};
export default Component;
