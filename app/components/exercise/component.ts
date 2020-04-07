import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { task } from 'ember-concurrency-decorators';
import { taskFor, timeout } from 'lungebox/utils/ember-concurrency';
import { object } from 'prop-types';

interface Exercise {
  title: string;
  actions: Action[];
}

interface Action {
  type: 'single' | 'multi';
  min: number;
  max?: number;
  items: Action[];
}

export default class ExerciseComponent extends Component {
  @arg(object.isRequired) exercise!: Exercise;

  @tracked action: Action | object = {};
  @tracked paused = false;

  @action play() {
    if (this.paused) {
      this.paused = false;
    } else {
      taskFor(this.loop).perform();
    }
  }

  @action pause() {
    this.paused = !this.paused;
  }

  @task({ restartable: true })* loop() {
    for (let action of this.exercise.actions) {
      while (this.paused) {
        yield timeout(100);
      }

      if (action.type === 'multi') {
        action = this.getRandomActionFromMulti(action);
      }

      this.action = action;
      let duration = this.getDuration(action.min, action.max);

      yield timeout(duration * 1000);
    }

    this.action = {};
  }

  getDuration(min: number, max?: number) {
    return max
      ? this.getFloatBetween(min, max)
      : min;
  }

  getFloatBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  getRandomActionFromMulti(multiAction: Action) {
    return multiAction.items[Math.floor(Math.random() * multiAction.items.length)];
  }
}
