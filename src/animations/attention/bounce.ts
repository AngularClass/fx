import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core'

export const bounce = (
  triggerName: string = 'bounce',
  startState: string, 
  endState: string
): any[] => {
  
  return [
    trigger(triggerName, [
      state(startState, style({})),
      state(endState, style({})),
      transition(`${startState} => ${endState}`, [
        animate(750, keyframes([
          ...[0, 0.2, 0.53, 0.8, 1].map(offset => (
            style({offset, transform: 'translate3d(0,0,0)', animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'})
          )),
          style({offset: 0.4, transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'}),
          style({offset: 0.43, transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'}),
          style({offset: 0.7, transform: 'translate3d(0, -15px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'}),
          style({offset: 0.9, transform: 'translate3d(0,-4px,0)'})
        ]))
      ])
    ])
  ]
}