import Route from '@ember/routing/route';

export default class Index extends Route {
  model() {
    return [{
      id: '1',
      name: 'Exercise 1'
    }];
  }
}
