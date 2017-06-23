import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  key:string;
  topics = [];
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
    
    this._httpService.retrieveTopics()
    .then( data => { console.log("topics in dasboard", data); this.topics = data})
    .catch( err => { console.log("error in topics retrieval",err); });
  }

  updatetopics(){
    this._httpService.retrieveTopics()
    .then( data => { console.log("topics in dasboard", data); this.topics = data})
    .catch( err => { console.log(err); });
  }

    logout(){
    console.log("The key is:",(this._cookieService.get("key")) );
    this._cookieService.removeAll();
    console.log("The key is empty:",(this._cookieService.get("key")) );
    this.router.navigate(['/login']);
  }

  destroy(topicid, topic){
   console.log("destroying topic");
   this._httpService.destroyOneTopic(topicid, topic)
    .then( data => { console.log("topics in dasboard", data); 
    this._httpService.retrieveTopics()
    .then( data => { console.log("topics in dasboard", data); this.topics = data})
    .catch( err => { console.log("error in topics retrieval",err); });
})
    .catch( err => { console.log(err); });
  }

}
