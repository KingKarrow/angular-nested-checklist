import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockConfig } from './mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let configService: ConfigService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(mockConfig));

    configService = new ConfigService(httpClientSpy);
    component = new AppComponent(configService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-nested-checklist'`, () => {
    expect(component.title).toEqual('angular-nested-checklist');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('nested-checklist app is running!');
  // });
});
