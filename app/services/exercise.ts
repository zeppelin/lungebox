import Service from '@ember/service';
import { Exercise, Repeat } from 'lungebox/models/exercise';

export default class ExerciseService extends Service {
  async fetch(): Promise<Exercise[]> {
    return [{
      id: '1',
      title: 'Totyogás, lépés-kitörés',
      repeat: Repeat.Infinite,
      actions: [{
        type: 'single',
        title: 'Totyogás előre',
        color: 'green',
        min: 3,
        max: 5
      }, {
        type: 'multi',
        items: [{
          type: 'single',
          title: 'Lépés-kitörés!',
          color: 'red',
          min: 3
        }, {
          type: 'single',
          title: 'Lépés hátra',
          color: 'purple',
          min: 1.5
        }]
      }]
    }];
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'exercise': ExerciseService;
  }
}
