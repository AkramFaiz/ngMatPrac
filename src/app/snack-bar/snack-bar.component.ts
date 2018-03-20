import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  @Input() msg: string;
  @Input() bVal: string;
  userResp: string;
  @Output() btnClked: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  userClk(e){
    this.userResp = e.currentTarget.value;
    this.userRes();
  }
  userRes(){
    this.btnClked.emit(this.userResp);
  }
}
