import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallasColComponent } from './mallas-col.component';

describe('MallasColComponent', () => {
  let component: MallasColComponent;
  let fixture: ComponentFixture<MallasColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallasColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallasColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
