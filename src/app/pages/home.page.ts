import { Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoDirective],
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <ng-container *transloco="let t">
      <h2>{{ t('greeting') }}</h2>
    </ng-container>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
