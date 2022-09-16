import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPlayerComponent } from './background-player.component';

describe('BackgroundPlayerComponent', () => {
  let component: BackgroundPlayerComponent;
  let fixture: ComponentFixture<BackgroundPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
