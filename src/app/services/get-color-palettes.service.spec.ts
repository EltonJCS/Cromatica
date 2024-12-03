import { TestBed } from '@angular/core/testing';

import { GetColorPalettesService } from './get-color-palettes.service';

describe('GetColorPalettesService', () => {
  let service: GetColorPalettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetColorPalettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
