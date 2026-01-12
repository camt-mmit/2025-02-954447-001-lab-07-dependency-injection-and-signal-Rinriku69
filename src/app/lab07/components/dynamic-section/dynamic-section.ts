import { ChangeDetectionStrategy, Component, effect, inject, model } from '@angular/core';
import { DynamicNumber } from '../dynamic-number/dynamic-number';
import { createSection, createSections } from '../../helpers';
import { JsonPipe } from '@angular/common';
import { SectionModel } from '../../types';
import { SectionStorage } from '../../services/section.storage';

@Component({
  selector: 'app-dynamic-section',
  imports: [DynamicNumber, JsonPipe],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  readonly dataStorage = inject(SectionStorage);
  readonly sections = model(createSections(this.dataStorage.get() ?? undefined));

  constructor() {
    effect(() => {
      const modelData = this.sections();
      this.dataStorage.set(modelData);
    });
  }
  addSection() {
    this.sections.update((secs) => [...secs, createSection()]);
  }

  removeSection(index: number) {
    this.sections.update((secs) => secs.filter((_, i) => i !== index));
  }

  changeSection(index: number, value: SectionModel) {
    this.sections.update((secs) => secs.map((s, i) => (i === index ? value : s)));
  }
}
