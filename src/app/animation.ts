import { trigger, state, style, animate, transition } from '@angular/animations';

export const animateForLoginSignup = trigger('formAnimation', [
    transition('login => signup', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate('800ms ease-in')
    ]),
    transition('signup => login', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate('800ms ease-in')
    ]),
    transition('void => *', [
      style({ opacity: 0}),
      animate('1s ease-in')
    ])
  ])

