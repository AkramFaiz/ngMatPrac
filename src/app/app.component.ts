import { Component, OnInit, Output } from '@angular/core';
import { slideUpEffect } from './slideUpEffect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideUpEffect]
})
export class AppComponent implements OnInit {  
  title : string = 'TATA Tea';
  currMsg: string;
  btnVal:string;
  eve: any;
  userActionVal: string;
  snackBarVis: boolean = false;
  constructor() { }
  ngOnInit(){
      // this.snackBarVis = true;
      if((navigator as any).standalone == false){
      // true in app , false browser
        this.currMsg ="Do you want to add the application in your phone ?";
        this.btnVal = 'Add';
        this.snackBarVis = true;
        console.log("true in app , false browser");
      }
      if((navigator as any).standalone == undefined){
        // not iOS
        if(window.matchMedia("(display-mode: browser").matches){
          // in browser
          window.addEventListener("beforeinstallprompt",event => {           
            this.eve = event;
            this.eve.preventDefault();
            console.log("not iOS, in browser");
            this.snackBarVis = true; 
            this.currMsg ="Do you want to Install the application to homescreen?";
            this.btnVal = 'Install';             
            return false;
          }); 
                              
          };
        }
      }

      
      userAction(userResp:string):void{
         if(userResp == "Install"){
          //  this.snackBarVis = false;
          (this.eve as any).prompt();
          this.snackBarVis = false;
          (this.eve as any).userChoice.then( result => {
              if(result.outcome == "dismissed"){
                console.log("App Not Installed.")
              }else{
                console.log("App Installed.")
              }
          });
          } 
        else if(userResp == "Add"){
          this.snackBarVis = false;
        }
      }
    }
