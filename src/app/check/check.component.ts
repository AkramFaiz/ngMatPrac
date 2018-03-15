import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  checked: boolean = false;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  okClk(){
    console.log(this.checked);
    if(this.checked){
      this._router.navigate(['home']);
    }else{
      return false;
    }
  }

}
