import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSetupComponent } from './git-setup.component';

describe('GitSetupComponent', () => {
  let component: GitSetupComponent;
  let fixture: ComponentFixture<GitSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
