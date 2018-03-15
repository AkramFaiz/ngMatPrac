import { Injectable } from '@angular/core';
import { PlaceLocation } from './Classes/placeLocation';

@Injectable()
export class GeoLocationService {

  constructor() { }
  reqLocation(callback){
    //w3c geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(error);
      }
    )
  }
  getMapLink(location: PlaceLocation){
    let query = "";
    if(location.lat){
      query = location.lat+","+location.long;
    } 
    else{
      query = `${location.address},${location.city}`;
    }

    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    }
    else{
      return `https://maps.google.com/?q=${query}`;
    }
  }
}
