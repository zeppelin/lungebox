import Route from '@ember/routing/route';

export default class extends Route {
  model() {
    return {
      title: 'Exercise 1',
      actions: [{
        type: 'single',
        title: 'Lepes elore',
        color: 'red',
        min: 1,
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
    };
  }
}
