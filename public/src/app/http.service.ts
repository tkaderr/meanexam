import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

//User CRUD
  createUser(user) {
    console.log("in services",user);
    return this._http.post('/user_new', user)
    .map( data => data.json() )
    .toPromise();
  }



  //Topic CRUD's

  retrieveOneTopic(id) {
    return this._http.get(`/topic/${id}`)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveTopics() {
    return this._http.get(`/topic`)
    .map( data => data.json() )
    .toPromise();
  }

  createTopic(topic, name) {
    return this._http.post(`/topic/${name}`, topic)
    .map( data => data.json() )
    .toPromise();
  }

   updateTopic(topic, id) {
    return this._http.put(`/update/topic/${id}`, topic)
    .map( data => data.json() )
    .toPromise();
  }

  destroyOneTopic(id, topic) {
    return this._http.put(`/destroy/topic/${id}`, topic)
    .map( data => data.json() )
    .toPromise();
  }

  upvote1(post){
    return this._http.post(`/upvote1`, post)
    .map( data => data.json() )
    .toPromise();
  }

  upvote2(post){
    return this._http.post(`/upvote2`, post)
    .map( data => data.json() )
    .toPromise();
  }

  upvote3(post){
    return this._http.post(`/upvote3`, post)
    .map( data => data.json() )
    .toPromise();
  }
  upvote4(post){
    return this._http.post(`/upvote4`, post)
    .map( data => data.json() )
    .toPromise();
  }

}