import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {
  currtopic = {};
  topicid;
  votepost;


  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this._route.params.subscribe((param)=>{
        console.log("Params topic id", param.id);
        this.topicid = param.id
          this._httpService.retrieveOneTopic(param.id)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
      })
 }

  vote1(id){
    this.votepost = {
      topicid : id,
      user : this._cookieService.get("key")
    }
    console.log("im in vote1 update",this.votepost);
    this._httpService.upvote1(this.votepost)
    .then(data=>{console.log("the new post:",data); 
    
    this._httpService.retrieveOneTopic(this.topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
  
})
    .catch(err=>{console.log("Failed to add:",err);})
  }


   vote2(id){
    this.votepost = {
      topicid : id,
      user : this._cookieService.get("key")
    }
    console.log("im in vote1 update",this.votepost);
    this._httpService.upvote2(this.votepost)
    .then(data=>{console.log("the new post:",data); 
    
    this._httpService.retrieveOneTopic(this.topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
  
})
    .catch(err=>{console.log("Failed to add:",err);})
  }

vote3(id){
    this.votepost = {
      topicid : id,
      user : this._cookieService.get("key")
    }
    console.log("im in vote1 update",this.votepost);
    this._httpService.upvote3(this.votepost)
    .then(data=>{console.log("the new post:",data); 
    
    this._httpService.retrieveOneTopic(this.topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
  
})
    .catch(err=>{console.log("Failed to add:",err);})
  }


 vote4(id){
    this.votepost = {
      topicid : id,
      user : this._cookieService.get("key")
    }
    console.log("im in vote1 update",this.votepost);
    this._httpService.upvote4(this.votepost)
    .then(data=>{console.log("the new post:",data); 
    
    this._httpService.retrieveOneTopic(this.topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
  
})
    .catch(err=>{console.log("Failed to add:",err);})
  }


  ngOnInit() {
    
    
  }

}
