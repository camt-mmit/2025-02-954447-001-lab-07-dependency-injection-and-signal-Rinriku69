import { Injectable } from '@angular/core';
import { SectionModel } from '../types';

const keyName = 'ng-section-data';
@Injectable({
  providedIn: 'root',
})
export class SectionStorage {
  set(data: readonly SectionModel[]): void {
    localStorage.setItem(keyName, JSON.stringify(data));
  }

  get(): SectionModel[] | null {
    const json = localStorage.getItem(keyName);
    return JSON.parse(json ?? 'null');
  }
}
