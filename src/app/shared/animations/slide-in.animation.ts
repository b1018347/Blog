import { trigger, state, style, transition, animate } from '@angular/core';

export const slideIn = trigger('slideIn', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-100px)'
    }),
    animate('300ms')
  ])
]);

