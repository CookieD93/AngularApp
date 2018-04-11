import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbserviceHandlerComponent } from './tmdbservice-handler.component';

describe('TmdbserviceHandlerComponent', () => {
  let component: TmdbserviceHandlerComponent;
  let fixture: ComponentFixture<TmdbserviceHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbserviceHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbserviceHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
