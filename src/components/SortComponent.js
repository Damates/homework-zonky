import React, { Component } from 'react';

export default  class SortComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: this.props.posts,
      rating : false,
      deadline: false,
      money: false,
      time: false
    
    }
  }

  sortByName (sortData){
    return sortData.sort(function(fobj, sobj){
        if(fobj.name.toLowerCase() < sobj.name.toLowerCase()) return -1;
        if(fobj.name.toLowerCase() > sobj.name.toLowerCase()) return 1;
        return 0;
      });
  }

  sortByAmount (sortData){
   return sortData.sort(function(fobj, sobj){    
                return (sobj.amount - fobj.amount);
            });
  }

  sortByTime (sortData){
   return sortData.sort(function(fobj, sobj){  
                let actualDate = new Date();
                let sobjDate = new Date(sobj.datePublished);
                let fobjDate = new Date(fobj.datePublished);
                let a = actualDate.getTime() - sobjDate.getTime();
                let b = actualDate.getTime() - fobjDate.getTime();
                return ( b - a);
            });
  }

  sortByRating (sortData){
   return sortData.sort(function(fobj, sobj){    
            if(fobj.rating.toLowerCase() < sobj.rating.toLowerCase()) return -1;
            if(fobj.rating.toLowerCase() > sobj.rating.toLowerCase()) return 1;
            return 0;
          });
  }

  sortByDeadline (sortData){
   return sortData.sort(function(fobj, sobj){    
                let sobjDate = new Date(sobj.deadline);
                let fobjDate = new Date(fobj.deadline);

                return (sobjDate.getTime() - fobjDate.getTime());
            });
  }

  addActiveClass(isActive) {
    this.setState(isActive)
  }

  sortClickEvent(ev, refs) {
    let newSortList = [];
    let isActive = {
      rating : false,
      deadline: false,
      money: false,
      time: false
    }

    switch(ev.target.type) {
        case "time":
            isActive.time = true;
            this.newSortList = this.sortByTime(this.state.posts);
            break;
        case "deadline":
            isActive.deadline = true;
             this.newSortList = this.sortByDeadline(this.state.posts);
            break;
        case "money":
            isActive.money = true;
            this.newSortList = this.sortByAmount(this.state.posts);

            break;
        case "rating":
            isActive.rating = true;
            this.newSortList = this.sortByRating(this.state.posts);
            break;
        default:
            console.log("No sort value")
            break;

    } 

    this.addActiveClass(isActive);
    this.props.updatePostList(this.newSortList)

  }

  render(){
    return (
          <div id="sortMenuArea" >
            <div className="label">
              Razeni:
            </div>
            <ul id="sortMenu">
              <li className={`rating btn btn-default ${this.state.rating ? 'active-btn' : ''}`}  onClick={this.sortClickEvent.bind(this)} type="rating" >Rating</li>
              <li className={`time btn btn-default ${this.state.time ? 'active-btn' : ''}`}   onClick={this.sortClickEvent.bind(this)} type="time">Délka trvání</li>
              <li className={`deadline btn btn-default ${this.state.deadline ? 'active-btn' : ''}`}   onClick={this.sortClickEvent.bind(this)} type="deadline">Deadline</li>
              <li className={`money btn btn-default ${this.state.money ? 'active-btn' : ''}`}   onClick={this.sortClickEvent.bind(this)} type="money">Částka</li>
            </ul>
          </div>
      )
  }
}