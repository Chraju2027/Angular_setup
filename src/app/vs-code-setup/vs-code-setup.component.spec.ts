import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsCodeSetupComponent } from './vs-code-setup.component';

describe('VsCodeSetupComponent', () => {
  let component: VsCodeSetupComponent;
  let fixture: ComponentFixture<VsCodeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsCodeSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsCodeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
