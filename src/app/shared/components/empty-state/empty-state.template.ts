import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  template: `
  <div class="content center">
    <span  style="background-image: url(assets/images/empty-bg.jpg);">
    No records found!
    </span>
  </div>`,
  styleUrls: ['./empty-state.template.css']
})
export class EmptyStateTemplate {}
