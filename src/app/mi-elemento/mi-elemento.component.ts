import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mi-elemento',
  template: `
    <p>
      mi-elemento works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class MiElementoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
