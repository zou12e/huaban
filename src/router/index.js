import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import store from '../redux';
import Home from '../containers/home/home';
import List from '../containers/list/list';


const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="router-content">
        <Switch>
          <Router path="/home" component={Home} />
          <Router path="/list/:id" component={List} />
          <Router path="/list" component={List} />
          <Router path="/" component={Home} />
        </Switch>
        <footer className="hb-footer center">
          © 2019-2020 7wood.cn 版权所有 备案号：
          <a href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备15007178号-4</a>
        </footer>
      </div>
    </Provider>
  </BrowserRouter>
);
// console.log('initial state: ', store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('store.getState())', store.getState()));

// function addToCart(product) {
//   return {
//     type: 'ADD',
//     payload: {product}
//   };
// }


// store.dispatch(addToCart('a'));

// unsubscribe();

export default hot(module)(Root);


// import React from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {hot} from 'react-hot-loader';
// import App from '../containers/app';
// import Docs from '../containers/docs';

// const Router = ({component: Component, children, ...rest}) => (
//   <Route
//     {...rest}
//     render={props => (
//       <Component {...props} ><Switch>{children}</Switch></Component>
//     )}
//   />
// );

// const Root = () => (
//   <BrowserRouter>
//     <div className="router-content">
//       <Switch>
//         <Router path="/" component={App} >
//           <Router exact path="/docs" component={Docs} />
//         </Router>
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

// export default hot(module)(Root);

