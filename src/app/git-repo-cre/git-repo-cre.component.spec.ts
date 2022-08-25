import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepoCreComponent } from './git-repo-cre.component';

describe('GitRepoCreComponent', () => {
  let component: GitRepoCreComponent;
  let fixture: ComponentFixture<GitRepoCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitRepoCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepoCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
