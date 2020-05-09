import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeNewComponentComponent } from './some-new-component.component';

describe('SomeNewComponentComponent', () => {
  let component: SomeNewComponentComponent;
  let fixture: ComponentFixture<SomeNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
