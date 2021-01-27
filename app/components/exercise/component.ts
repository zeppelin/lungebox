import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { restartableTask } from 'ember-concurrency-decorators';
import { taskFor } from 'ember-concurrency-ts';
import { Action, Exercise } from 'lungebox/models/exercise';
import { timeout } from 'lungebox/utils/ember-concurrency';
import { object } from 'prop-types';

export default class ExerciseComponent extends Component {
  @arg(object.isRequired) exercise!: Exercise;

  @tracked action: Action | object = {};
  @tracked paused = false;

  @action play() {
    if (this.paused) {
      this.paused = false;
    } else {
      taskFor(this.run).perform();
    }
  }

  @action pause() {
    this.paused = !this.paused;
  }

  @restartableTask async run() {
    await taskFor(this.countdown).perform();

    let i = 2;
    while (i--) {
      await taskFor(this.loop).perform();
    }
  }

  @restartableTask async loop() {
    for (let action of this.exercise.actions) {
      while (this.paused) {
        await timeout(100);
      }

      if (action.type === 'multi') {
        action = this.getRandomActionFromMulti(action);
      }

      this.action = action;
      let duration = this.getDuration(action.min, action.max);

      await timeout(duration * 1000);
    }

    this.action = {};
  }

  @restartableTask async countdown() {
    let i = 10;

    while (i--) {
      while (this.paused) {
        await timeout(100);
      }

      this.action = {
        title: (i + 1).toString(),
        color: 'teal'
      };

      await timeout(1000);
    }
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
