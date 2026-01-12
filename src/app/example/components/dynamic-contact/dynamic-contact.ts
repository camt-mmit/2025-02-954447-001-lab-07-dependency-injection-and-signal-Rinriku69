import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { DynamicTel } from '../dynamic-tel/dynamic-tel';
import { createContact } from '../../helpers';

import { ContactModel } from '../../types';

@Component({
  selector: 'app-dynamic-contact',
  imports: [DynamicTel],
  templateUrl: './dynamic-contact.html',
  styleUrl: './dynamic-contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicContact {
  readonly contacts = model<readonly ContactModel[]>([createContact()]);

  protected addContact(): void {
    this.contacts.update((contacts) => {
      return [...contacts, createContact()];
    });
  }

  protected removeContact(index: number) {
    this.contacts.update((contacts) => {
      return contacts.filter((_, i) => i !== index);
    });
  }

  protected changeContact(index: number, value: ContactModel) {
    this.contacts.update((contact) => {
      return contact.map((contact, i) => {
        if (i == index) {
          contact.name = value.name;
          contact.tels = value.tels;
        }
        return contact;
      });
    });
  }
}
