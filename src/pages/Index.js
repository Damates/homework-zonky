import React, { Component } from 'react';
import Sort from '../components/SortComponent.js';
import Util from '../components/Util.js';
import Post from '../components/PostComponent.js';
import DataActions from '../components/DataActions.js';


export default class Index extends Component {


  constructor(props) {
    super(props);

   	const dataActions = new DataActions();
    this.state = { 	util: new Util(), 
    				posts:  dataActions.getAllPosts(),
    				dataShow: true
    			}

  }

  componentDidMount(){
  	setInterval(()=> { 
    	console.log("Update list")
    	this.updatePostList(new DataActions().getAllPosts());

    }, 600000);

    if(this.state.posts == null || this.state.posts == undefined){

    	this.setState({
        posts : [],
        dataShow : false }
        );
    }
  }

  //Function for update post list
  updatePostList(newPostList) {

    this.setState({
    	posts: newPostList
    });

  }



  render() {
  	
    const postsHtml = this.state.posts.map((item, i) => {
      	return <Post post={item} key={i} index={i} />
    });


    return (
      <div className="container">
	      <Sort posts={this.state.posts} updatePostList={this.updatePostList.bind(this)}  />
	      <div className="row" id="postList">
	      	{this.state.dataShow ?  postsHtml  : <h2 className="text-center">Žádné inzeráty k zobrazení</h2>}
	      </div>
      </div>);
  }
}
