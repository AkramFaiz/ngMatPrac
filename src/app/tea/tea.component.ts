import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tea } from '../Classes/tea';
import { PlaceLocation } from '../Classes/placeLocation';
import { GeoLocationService } from '../geo-location.service';
import { TasteRating } from '../Classes/tasteRating';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {
  tea: tea;
  types = ["Ginger","Cardamom","Lemon","Green"];
  constructor(private route:ActivatedRoute,private _http:Http, private geoL:GeoLocationService) { }
  routeSubs: any;

  // slider 
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
  // slider 

  ngOnInit() {
    this.tea = new tea();
    this.routeSubs = this.route.params.subscribe(params => {
      console.log(params["id"]);
    });
    this.geoL.reqLocation(location =>{
      if(location){
        this.tea.location.lat=location.latitude;
        this.tea.location.long=location.longitude;
      }
    });

  }
  ngOnDestroy(){
    this.routeSubs.unsubscribe();
  }

  tastingState(check:boolean){
    if(check){
      this.tea.tastingRate = new TasteRating;
    }else{
      this.tea.tastingRate = null;
    } 
  }

  submitClk(){
    console.log(this.tea);
  }
  cancelClk(){
    this.tea = new tea();
  }
}
