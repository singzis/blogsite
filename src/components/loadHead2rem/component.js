import React from 'react';
import PropTypes from 'prop-types'
// import { redirect } from '../../common/js/util';
import openAppUrl from '../../components/openAppUrl'


class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  delete() {
    const { onDelete } = this.props;
    this.setState({
      isShow: false,
    }, () => {
      onDelete();
    });
  }
  onOpenUrl(path, prop, value) {
    // const url = `yicaibao://web?url=http://www.baidu.com`

    openAppUrl.show(path, prop, value);
  }

  render() {
    const { className, path, prop, value } = this.props;
    const { isShow } = this.state;
    return (
      <div className={className} ref={loader => this.loader = loader} style={{ display: `${isShow ? '' : 'none'}` }}>
        <div className={`${className}-left`}>
          <i className={`iconfont icon-btn-guanbicopy ${className}-delete`} onClick={this.delete.bind(this)} />
          {/* <img src={require('../../../images/loadheadIcon.png')} className={`${className}-logo`} alt="" />
          <div className={`${className}-wordlogowrapper`}>
            <img src={require('../../../images/loadheadwordicon.png')} className={`${className}-wordlogo`} alt="" />
            <span>{text}</span>
          </div> */}
          <span className={`${className}-loadTitle`}>
            下载APP可以在线下单及查看更多海量商品哦~
          </span>
        </div>
        {/* <div className={`${className}-download`} onClick={redirect.bind(null, 'https://m.microants.cn/official-site/download')}>
          <span>下载App</span>
        </div> */}
        <div className={`${className}-download`} onClick={this.onOpenUrl.bind(this, path, prop, value)}>
          <span>打开App</span>
        </div>
      </div>
    );
  }
}
Component.defaultProps = {
  className: 'loadHead',
  text: '更多功能，尽在手机客户端',
  onDelete: () => { },
  // url: 'microants://supplier?tab=yiqicha'
};
Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Component;
