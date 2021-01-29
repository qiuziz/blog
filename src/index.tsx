import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Router from './router';
import reportWebVitals from './reportWebVitals';

declare const window: any;
declare let __webpack_public_path__: any;

let prefix = '';

/**
 * @see https://qiankun.umijs.org/zh/faq#a-%E4%BD%BF%E7%94%A8-webpack-%E8%BF%90%E8%A1%8C%E6%97%B6-publicpath-%E9%85%8D%E7%BD%AE
 * runtime publicPath 主要解决的是微应用动态载入的 脚本、样式、图片 等地址不正确的问题。
 */
if (window.__POWERED_BY_QIANKUN__) {
	prefix = '/widget';
  // eslint-disable-next-line no-unused-vars
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props: any) {
  const { container } = props;
  ReactDOM.render(<Router prefix={prefix} />, (container || document).querySelector('#root'));
}

function storeTest(props: any) {
  props.onGlobalStateChange(
    (value: any, prev: any) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name
    }
  });
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[subapp] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[subapp] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode((container || document).querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
