import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import ExerciseService from 'lungebox/services/exercise';

export default class Index extends Route {
  @inject exercise!: ExerciseService;

  model() {
    return this.exercise.fetch();
  }
}
