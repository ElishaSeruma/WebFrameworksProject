import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';
import { ManutdData } from '../manutd-data';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [{
        provide: ManutdData,
        useValue: {
          getStaff: async () => [],
          getPlayers: async () => [],
        },
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
