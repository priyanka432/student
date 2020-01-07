import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StInformationComponent } from './st-information.component';

describe('StInformationComponent', () => {
  let component: StInformationComponent;
  let fixture: ComponentFixture<StInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
