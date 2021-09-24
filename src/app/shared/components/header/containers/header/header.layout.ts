import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ComponentPortal, DomPortalOutlet, PortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, EventEmitter, Injector, OnDestroy } from '@angular/core';

import { NavUnitSelectorComponent } from '../nav-unit-selector/nav-unit-selector.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.layout.html',
  styleUrls: ['./header.layout.css']
})
export class HeaderLayout implements OnInit, OnDestroy {
  private portalOutlet: PortalOutlet;

  date: Date;

  @Input() title: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  @Output() callback = new EventEmitter();

  constructor(private injector: Injector,
              private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) { 
    this.date = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.setupPortal()
  }

  ngOnDestroy(): void{
    this.portalOutlet.detach();
  }

  doSearch(): void {
    this.callback.emit();
  }

  private setupPortal(): void {
    const element = document.querySelector('#navbar-portal-outlet');  
    this.portalOutlet = new DomPortalOutlet(
      element!,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    this.portalOutlet.attach(new ComponentPortal(NavUnitSelectorComponent));
 }

}
