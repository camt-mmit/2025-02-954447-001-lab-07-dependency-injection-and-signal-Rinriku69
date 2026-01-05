import { Injectable } from '@angular/core';
import { Contact } from '../types';
const keyName = 'example-data';
@Injectable({
  providedIn: 'root',
})
export class ExampleDataStorage {
  set(data: Contact[]): void {
    const jsonText = JSON.stringify(data);
    localStorage.setItem(keyName, jsonText);
  }
  get(): Contact[] | null {
    const jsonText = localStorage.getItem(keyName);
    return JSON.parse(jsonText ?? 'null');
  }
}
