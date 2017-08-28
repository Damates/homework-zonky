import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import DataActions from '../components/DataActions.js';
import Moment from 'react-moment'


export default class PostDetail extends Component {

	constructor(props){
		super(props);

		const idPost = this.props.params.id;
		const dataActions = new DataActions();

		this.state = {
			post : dataActions.getPostById(idPost)
		}
		
	}

	componentWillMount() {
		if(this.state.post === undefined || this.state.post === null ){
			window.location.href = "/404"
		}
	}

	//Function for navigate to post list page
	navigate(){
		browserHistory.goBack(); // predelat 
	}

  	render() {
    	return (

	    	<div className="container">
	    		<button className="btn btn-default" onClick={this.navigate.bind(this)}>  Zpět na seznam</button>
		     	<div className="row"> 
		     		<div className="col-md-12 col-xs-12 text-center">
		     			<h1> {this.state.post.name} </h1>
		     			<img src={"https://api.zonky.cz" + this.state.post.photos[0].url } title={this.state.post.photos[0].title} alt={this.state.post.photos[0].title} />
		    		</div>
		     		<div className="col-md-12"> 
		     			<h3> Pribeh</h3>
		     			<p>
		     				{this.state.post.story}
		     			</p>
		     		</div> 
		     		<div className="col-md-12"> 
		     			<h3> Ostatni parametry</h3>
		     			<ul className="list-unstyled">
		     	
							<li>id: {this.state.post.id}</li>
						  	<li>url: {this.state.post.url}</li>
						  	<li>purpose: {this.state.post.purpose}</li>
						  	<li>nickName: {this.state.post.nickName}</li>
						  	<li>termInMonths: {this.state.post.termInMonths}</li>
						  	<li>interestRate: {this.state.post.interestRate}</li>
						  	<li>rating: {this.state.post.rating}</li>
						  	<li>topped: {this.state.post.topped}</li>
						  	<li>amount: {this.state.post.amount}</li>
						  	<li>remainingInvestment: {this.state.post.remainingInvestment}</li>
						  	<li>investmentRate: {this.state.post.investmentRate}</li>
						  	<li>covered: {this.state.post.covered}</li>
						  	<li>datePublished: <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.post.datePublished}</Moment></li>
						  	<li>published: {this.state.post.published}</li>
						  	<li>deadline: <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.post.deadline}</Moment></li>
						  	<li>investmentsCount: {this.state.post.investmentsCount}</li>
						  	<li>questionsCount: {this.state.post.questionsCount}</li>
						  	<li>region: {this.state.post.region}</li>
						  	<li>mainIncomeType: {this.state.post.mainIncomeType}</li>

		     			</ul>
		     		</div> 
		     	</div>
	     	</div>
	    );
  	}
}

