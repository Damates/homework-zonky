import React, { Component } from 'react';
import{ Link } from 'react-router'
import Util from '../components/Util.js';
import Moment from 'react-moment'


export default class Index extends Component {


  render() {
  	let util =  new Util();
  	const post = this.props.post;	
   		if(post.published){

	      	return (
		        <div className="col-md-12 col-xs-12 post" key={this.props.index} > 
		        	<h1> 
		        		<Link to={"/detail/"+post.id} > {util.cutText(post.name)}  </Link>
		        	</h1> 
		          	
		          	<div className="col-md-4 col-xs-12" > 
		          		<img className="images img-thumbnail" src={"https://api.zonky.cz" +post.photos[0].url }  alt={post.photos[0].name} /> 
		          	</div>
		          	<div className="col-md-8 col-xs-12">

		          		<h4>Informace</h4>
		          		<ul className="list-unstyled">
		          			<li>Částka: <strong>{post.amount} Kč</strong></li>
		          			<li>Publikováno: <Moment format="DD.MM.YYYY HH:mm:ss">{post.datePublished}</Moment></li>
		          			<li>Deadline: <Moment format="DD.MM.YYYY HH:mm:ss">{post.deadline}</Moment></li>
		          			<li>Rating: {post.rating}</li>
		          		</ul>
		          		<h4>Pribeh</h4>
		          		<p >
		          			{util.cutText(post.story)} <Link to={'detail/'+post.id } >.... více zde</Link> 
		          		</p>  
		          	</div>

		        </div>
	    	)
   		}else{
   			return ;
   		}
	}


}