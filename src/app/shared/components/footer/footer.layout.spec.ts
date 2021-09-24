import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLayout } from './footer.layout';

describe('FooterLayout', () => {
  let component: FooterLayout;
  let fixture: ComponentFixture<FooterLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
