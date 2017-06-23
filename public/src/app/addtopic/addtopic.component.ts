import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
@Output() createtopic = new EventEmitter();

newtopic = {
  question: '',
  option1: '',
  option2: '',
  option3: '',
  option4: ''
};
curruser : string
topicid;

  constructor(private _cookieService:CookieService, private _httpService: HttpService, private _route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.curruser = this._cookieService.get("key")


  }

  create(form){
    this._httpService.createTopic(this.newtopic, this.curruser)
    .then(data => {console.log(data); this.createtopic.emit();})
    .catch(err => {console.log(err);});

    form.resetForm();
  }

}
