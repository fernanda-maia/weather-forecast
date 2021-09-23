import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.layout.html',
  styleUrls: ['./header.layout.css']
})
export class HeaderLayout implements OnInit {

  date: Date;

  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  @Output() callback = new EventEmitter();

  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  doSearch(): void {
    this.callback.emit();
  }

}
