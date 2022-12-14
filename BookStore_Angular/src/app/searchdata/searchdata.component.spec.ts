import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdataComponent } from './searchdata.component';

describe('SearchdataComponent', () => {
  let component: SearchdataComponent;
  let fixture: ComponentFixture<SearchdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
