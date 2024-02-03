import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState',[
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out',style({
      tranform: 'scale(1.02)'
    })),
    animate(200) //milisegundos
  ])
])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter',[
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave',[
    animate(300, style({
      opacity: 0
    }))
  ])
  // state('notShown', style({

  // })),
  // state('shown', style({

  // })),

  // transition('void => *',[
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300, style({
  //     opacity: 1
  //   }))
  // ]),
  // transition('* => void',[
  //   animate(300, style({
  //     opacity: 0
  //   }))
  // ])

])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => unchecked',[
    animate('400ms ease-in', style({
      transforme: 'scale(0.4)'
    }))
  ])
])
