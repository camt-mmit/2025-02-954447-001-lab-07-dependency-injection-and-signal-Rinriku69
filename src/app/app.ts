import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('week-07');
}
