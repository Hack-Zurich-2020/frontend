import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockJsonOutputsComponent } from './mock-json-outputs.component';

describe('MockJsonOutputsComponent', () => {
  let component: MockJsonOutputsComponent;
  let fixture: ComponentFixture<MockJsonOutputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockJsonOutputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockJsonOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
