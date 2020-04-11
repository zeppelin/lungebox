import Component from '@glimmer/component';
import { Action } from 'lungebox/models/exercise';

export default class ExerciseComponent extends Component<{
  actions: Action[];
}> {
  get actions(): Array<{ title: string; bgClass: string }> {
    return this.args.actions.reduce((acc, action) => {
      if (action.type === 'single') {
        acc.push(action);
      } else {
        for (let singleAction of action.items) {
          acc.push(singleAction);
        }
      }

      return acc;
    }, [] as Action[]).map(({ title, color }) => {

      return {
        title,
        bgClass: ({
          red: 'bg-red-500',
          orange: 'bg-orange-500',
          blue: 'bg-blue-500',
          green: 'bg-green-500',
          purple: 'bg-purple-500'
        } as any)[color] as string
      };
    });
  }
}
