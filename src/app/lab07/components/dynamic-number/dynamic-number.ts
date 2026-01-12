import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { createNumber, createSection } from '../../helpers';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-number',
  imports: [DecimalPipe],
  templateUrl: './dynamic-number.html',
  styleUrl: './dynamic-number.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicNumber {
  readonly section = model(createSection());
  readonly removable = input(true);
  readonly remove = output<void>();
  readonly number = input.required();
  readonly total = computed(() => {
    const section = this.section();
    const numbers = section?.numbers ?? [];

    return numbers.reduce((a, b) => a + b.value, 0);
  });

  addNumber() {
    this.section.update((s) => ({
      ...s,
      numbers: [...s.numbers, createNumber()],
    }));
  }

  removeNumber(index: number) {
    this.section.update((s) => ({
      ...s,
      numbers: s.numbers.filter((_, i) => i !== index),
    }));
  }

  changeNumber(index: number, value: number) {
    this.section.update((s) => {
      const numbers = s.numbers.map((n, i) => (i === index ? { value } : n));

      return { numbers };
    });
  }
}
