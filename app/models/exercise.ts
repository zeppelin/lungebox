export interface Exercise {
  id: string;
  title: string;
  repeat?: Repeat;
  actions: Action[];
}

export type Action = SingleAction | MultiAction;

export interface SingleAction extends AbstractAction {
  type: 'single';
  title: string;
  color: string;
  min: number;
  max?: number;
}

export interface MultiAction extends AbstractAction {
  type: 'multi';
  items: SingleAction[];
}

interface AbstractAction {
  type: 'single' | 'multi';
}

export enum Repeat {
  Infinite = 'infinite',
}
