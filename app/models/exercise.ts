export interface Exercise {
  title: string;
  actions: Action[];
}

export interface Action {
  type: 'single' | 'multi';
  title: string;
  color: string;
  min: number;
  max?: number;
  items: Action[];
}
