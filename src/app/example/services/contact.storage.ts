import { APP_ID, inject, Injectable } from '@angular/core';
import { Contact } from '../types';
const keyName = 'contact-data';
@Injectable({
  providedIn: 'root',
})
export class ContactStorage {
  private readonly keyName = `${inject(APP_ID)}-${keyName}` as const;
  set(data: readonly Contact[]): void {
    const jsonText = JSON.stringify(data);
    localStorage.setItem(this.keyName, jsonText);
  }
  get(): Contact[] | null {
    const jsonText = localStorage.getItem(this.keyName);
    return JSON.parse(jsonText ?? 'null');
  }
}
