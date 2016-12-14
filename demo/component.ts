import { Component } from '@angular/core'
const { bounce } = require('../dist/fx')

@Component({
  selector: 'app',
  styles: [`
    .box {
      width: 200px;
      height: 200px;
      background-color: red;
    }
  `],
  template: `
    <div>
      <div
        (@bounce.done)="state = 'start'"
        [@bounce]="state"
        class="box">
        bounce
      </div>
      <button (click)="state = 'active'">
        click me
      </button>
    </div>
  `,
   animations: bounce('bounce', 'start', 'active')
})
export class App {
  state: string = 'start'
}