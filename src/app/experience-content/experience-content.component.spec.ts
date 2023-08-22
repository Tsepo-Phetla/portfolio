import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceContentComponent } from './experience-content.component';

describe('ExperienceContentComponent', () => {
  let component: ExperienceContentComponent;
  let fixture: ComponentFixture<ExperienceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceContentComponent]
    });
    fixture = TestBed.createComponent(ExperienceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
