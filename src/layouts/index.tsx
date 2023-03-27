import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.less';
import { Switch } from 'react-router';
import { history as Router, withRouter } from 'umi';
import React from 'react';
import JmHeader from './JmHeader';

const routerStack = (sessionStorage.getItem('ROUTER_STACK') || '')
  .split(',')
  .filter(Boolean); // 路由堆栈记录

const getClassName = (location: any) => {
  const index = routerStack.lastIndexOf(location.pathname); // 这里要找出现的最后一条记录
  if (index >= 0 && routerStack.length - 1 === index) return 'in'; // 重复打开同样的路由不增加记录
  const isLastRoute = index >= 0 && index === routerStack.length - 2; // 存在且是上一页
  const className = isLastRoute ? 'back' : 'in';
  if (isLastRoute) routerStack.pop();
  else routerStack.push(location.pathname);
  sessionStorage.setItem('ROUTER_STACK', routerStack.join()); // 更改后随时保存
  return className;
};

let oldLocation = {};
export default withRouter(({ location, children, history }) => {
  const classNames = getClassName(location, oldLocation);
  return (
    <div>
      <JmHeader currentRoute={location} />
      <TransitionGroup
        className="transition_wrapper"
        childFactory={(child) =>
          // React.cloneElement(child, { classNames: routerType[history.action] })
          React.cloneElement(child, { classNames: classNames })
        }
      >
        <CSSTransition key={location.pathname} appear timeout={1000}>
          {/* children.props.chiildren就是一个<Router></Router>的列表，location是对应的路由，switch会匹配对应当前hash展示路由 */}
          <Switch location={location}>
            {(children as any)?.props?.children}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});
