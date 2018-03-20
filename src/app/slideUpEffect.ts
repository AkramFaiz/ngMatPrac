import { Component, OnInit, trigger, transition, style, animate, keyframes} from '@angular/core';

export let slideUpEffect = trigger('slideUpEffect',[
    transition('void => *',[
       animate(2000,keyframes([
         style({opacity: 0, transform: 'translateY(-200px)',offset:0}),
         style({opacity: 1, transform: 'translateY(0)',offset:1}),
       ]))
    ])
  ]);