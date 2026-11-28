import { Service, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HealthcheckResponse} from '@shared/services/health-checker/model/healthcheck-response.model';

@Service()
export class ApiHealthcheck {

  private http = inject(HttpClient);

  getHealthCheck(): Observable<HealthcheckResponse> {
    return this.http.get<HealthcheckResponse>('/api/actuator/health');
  }

}
