import { TestBed } from '@angular/core/testing';
import { ManutdData } from './manutd-data';

describe('ManutdData', () => {
  let service: ManutdData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManutdData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
