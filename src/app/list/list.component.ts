import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tea } from '../Classes/tea';
import { Router } from '@angular/router';
import { GeoLocationService } from '../geo-location.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:[tea];

  constructor(private _data:DataService,private route:Router,private geoL:GeoLocationService) { }

  ngOnInit() {
   this._data.getList(teaList => {
    this.list = teaList;
   })
  }
  editClk(tealis: tea){
    this.route.navigate(['/tea',tealis._id]);
  }

  goMap(tealis: tea){
    const mapURL = this.geoL.getMapLink(tealis.location);
    location.href = mapURL;
  }
  goShare(tealis: tea){
    const sharedText = `I had tea at ${tealis.place} and I give a ${tealis.rating} rating.`;
    if('share' in navigator){
      // navigator.share   is same as navigator["share"]  and also (navigator as any).share
      navigator["share"]({
        title:tea.name,
        text: sharedText,
        url:window.location.href,
      }).then( ()=> console.log("shared")).catch(() => console.log("error"));
    }else{
      const sharedURL = `whatsapp://send?text=${encodeURIComponent(sharedText)}`;
      location.href=sharedURL;
    }
  }
}
