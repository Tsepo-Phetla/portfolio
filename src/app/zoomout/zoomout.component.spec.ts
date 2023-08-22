import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomoutComponent } from './zoomout.component';

describe('ZoomoutComponent', () => {
  let component: ZoomoutComponent;
  let fixture: ComponentFixture<ZoomoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomoutComponent]
    });
    fixture = TestBed.createComponent(ZoomoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
