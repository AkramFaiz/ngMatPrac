import { Injectable } from '@angular/core';
import { tea } from './Classes/tea';
import { PlaceLocation } from './Classes/placeLocation';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  public endPoint = "http://localhost:2000";

  constructor(private http:Http) { }

  getList(callback){
    // const teaList = [
    //   new tea("ginger","Sunny Cafe",new PlaceLocation("123 Market St","San Francisco")),
    //   new tea("lemon","Starcofee",new PlaceLocation("Gran Via 34","Madrid"))
    // ];
    // callback(teaList);

    this.http.get(`${this.endPoint}/tea`).subscribe(response => {
      console.log("res",response.json());
      callback(response.json());
    });
  }
  save(tea,callback){
    if(tea._id){
      this.http.put(`${this.endPoint}/tea/${tea._id}`,tea)
      .subscribe(response =>{
        callback(response.json());
      });
    }else{
      this.http.post(`${this.endPoint}/tea`,tea)
      .subscribe(response =>{
        callback(response.json());
      });
    }
  }
}
