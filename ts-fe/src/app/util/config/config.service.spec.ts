import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfigService', () => {
  let service: ConfigService;
  let outputData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      teardown: { destroyAfterEach: false },
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log "Version" to console when calling init', () => {
    outputData = '';
    const storeLog = (inp01) => (outputData += inp01);
    // Keeping original log fct to restore it later, to avoid side effects
    const restore = console.info;
    // only checking via first input of console.log, its sufficient
    const mockLog = jest.fn(storeLog);
    console.info = mockLog;
    service = TestBed.inject(ConfigService);
    expect(mockLog).toHaveBeenCalled();
    expect(outputData).toBe('Version');
    console.info = restore;
  });
});
