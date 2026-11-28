import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApiHealthcheck} from './shared/services/health-checker/api-healthcheck';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Communo');
  protected readonly isUp = signal(false);
  protected readonly checked = signal(false);

  private _healthCheckSvc = inject(ApiHealthcheck);

  onTriggerBackendHealthCheck() {
    this._healthCheckSvc.getHealthCheck().subscribe(
       healthCheckResponse => {
        const isBackendUp = healthCheckResponse.status == 'UP';
        this.isUp.set(isBackendUp);
        this.checked.set(true);
      },
      err => {
        this.isUp.set(false);
        this.checked.set(true);
      }
    )
  }
}
