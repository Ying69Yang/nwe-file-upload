import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NweFileUploadComponent } from './nwe-file-upload.component';

describe('NweFileUploadComponent', () => {
  let component: NweFileUploadComponent;
  let fixture: ComponentFixture<NweFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NweFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NweFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
