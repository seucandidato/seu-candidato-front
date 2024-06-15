import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsContactComponent } from './cms-contact.component';

describe('CmsContactComponent', () => {
  let component: CmsContactComponent;
  let fixture: ComponentFixture<CmsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
