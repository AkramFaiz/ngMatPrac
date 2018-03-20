import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  VAPID_PUBLIC_KEY:string="BA7fv9lDwjdnEf8hPCye_QuKlq4NNlCEwxj6Unqc5mDXb4qF9Av_hXkgtyt1k8weIJTBWruShkRnA66zgiVduEA";
  constructor(private swPush:SwPush) { }

  ngOnInit() {
  }
  showNotif(){
  //     Notification.requestPermission(permission =>{
  //       if(permission == "granted"){
  //         this.swPush.requestSubscription({
  //           serverPublicKey: this.VAPID_PUBLIC_KEY
  //         })
  //           .then(pushSubscription => {
      
  //             // Passing subscription object to our backend
  //             this.pushService.addSubscriber(pushSubscription)
  //               .subscribe(
      
  //               res => {
  //                 console.log('[App] Add subscriber request answer', res)
      
  //                 // let snackBarRef = this.snackBar.open('Now you are subscribed', null, {
  //                 //   duration: this.snackBarDuration
  //                 // });
  //               },
  //               err => {
  //                 console.log('[App] Add subscriber request failed', err)
  //               }
      
  //               )
  //           })
  //           .catch(err => {
  //             console.error(err);
  //           })
  //       }
  //     })
   }
}
