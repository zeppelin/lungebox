export interface Exercise {
  id: string;
  title: string;
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
  items: Action[];
}

interface AbstractAction {
  type: 'single' | 'multi';
}
