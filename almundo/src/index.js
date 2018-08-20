import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './store/reducers'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const logger_personal = ({dispatch, getState}) => next => action =>{
  console.log('estado anterios: ', getState())
  console.log('enviando accion: ', action)
  const result  = next(action)
  console.log('nueva accion: ', getState())
  return result
}
const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(logger_personal, thunk)));
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={createHistory}>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/home" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
