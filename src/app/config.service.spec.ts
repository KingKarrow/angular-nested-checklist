import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   imports: [ HttpClientTestingModule ]
    // });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new ConfigService(httpClientSpy);
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpClient);
    // service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
