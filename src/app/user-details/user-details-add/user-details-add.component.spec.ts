import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsAddComponent } from './user-details-add.component';



describe('UserDetailsAddComponent', () => {
  let component: UserDetailsAddComponent;
  let fixture: ComponentFixture<UserDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
