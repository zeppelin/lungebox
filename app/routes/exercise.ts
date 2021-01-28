import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import ExerciseService from 'lungebox/services/exercise';

export default class extends Route {
  @inject exercise!: ExerciseService;

  async model(params: { id: string }) {
    let exercises = await this.exercise.fetch();
    return exercises.find(({ id })=> id === params.id);
  }
}
