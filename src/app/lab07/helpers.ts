import { NumberModel, SectionModel } from './types';

export function createNumber(value = 0): NumberModel {
  return { value };
}

export function createSection(): SectionModel {
  return {
    numbers: [createNumber()],
  };
}
export function normalizeSection(s?: SectionModel): SectionModel {
  if (!s) return createSection();

  return {
    numbers: s.numbers.map((n) => ({ value: n.value })),
  };
}
export function createSections(section?: readonly SectionModel[]): readonly SectionModel[] {
  return (section ?? [undefined]).map(normalizeSection);
}
