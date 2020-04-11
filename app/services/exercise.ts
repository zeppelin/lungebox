import Service from '@ember/service';

export default class ExerciseService extends Service {
  fetch() {
    return Promise.resolve([{
      id: '1',
      title: 'Exercise 1',
      actions: [{
        type: 'single',
        title: 'Lepes elore',
        color: 'red',
        min: 2,
        max: 4.5
      }, {
        type: 'multi',
        items: [{
          type: 'single',
          title: 'Kitores',
          color: 'orange',
          min: 2
        }, {
          type: 'single',
          title: 'Sixt vedes, lepes hatra',
          color: 'blue',
          min: 2
        }]
      }, {
        type: 'single',
        title: 'Lepes hatra',
        color: 'green',
        min: 2,
        max: 4.5
      }, {
        type: 'single',
        title: 'Kitores',
        color: 'purple',
        min: 3,
        max: 4.5
      }]
    }, {
      id: '2',
      title: 'Exercise 2',
      actions: [{
        type: 'single',
        title: 'Lepes elore',
        color: 'red',
        min: 2,
        max: 4.5
      }, {
        type: 'multi',
        items: [{
          type: 'single',
          title: 'Kitores',
          color: 'orange',
          min: 2
        }, {
          type: 'single',
          title: 'Kitores',
          color: 'purple',
          min: 3,
          max: 4.5
        }, {
          type: 'single',
          title: 'Sixt vedes, lepes hatra',
          color: 'blue',
          min: 2
        }]
      }, {
        type: 'single',
        title: 'Lepes hatra',
        color: 'green',
        min: 2,
        max: 4.5
      }]
    }]);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'exercise': ExerciseService;
  }
}
