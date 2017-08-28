import React, { Component } from 'react';

export default class NotFound extends Component {
	navigate(){

	}

  render() {
    return (
    	<div className="container">
		    <div className="row">
		        <div className="col-md-12">
		            <div className="error-template">
		                <h1>
		                    Oops!</h1>
		                <h2>
		                    404 Stránka nenalezena</h2>
		                <div className="error-details">
		                    Omlouváme se ale Vaše požadovaná stránka se ze nenachází!
		                </div>
		                <button type="button" className="btn btn-primary" onClick={() => { this.props.router.push('/')}} >Jít na hlavní stránku</button>
		            </div>
		        </div>
		    </div>
	    </div>
);
  }
}

