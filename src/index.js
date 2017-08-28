import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';


/* Pages */
import Index from './pages/Index.js';
import PostDetail from './pages/PostDetail.js';
import NotFound from './pages/404.js';


const root = document.getElementById('root');


ReactDOM.render(
	<Router history={browserHistory}>
    	<Route path="/" component={Index} >
    		<IndexRoute component={Index}></IndexRoute>
    	</Route>
    	<Route name="postDetail" path="/detail/:id" component={PostDetail} ></Route>
    	<Route path="*" component={NotFound} />
  	</Router>, 
  	root);
