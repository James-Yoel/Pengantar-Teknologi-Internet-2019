import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuliahListComponent } from './kuliah-list.component';

describe('KuliahListComponent', () => {
  let component: KuliahListComponent;
  let fixture: ComponentFixture<KuliahListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuliahListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuliahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
