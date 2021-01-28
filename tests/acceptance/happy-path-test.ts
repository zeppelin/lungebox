import { click, visit, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import sinon from 'sinon';

import { exerciseData } from './happy-path-helpers';

module('Acceptance | happy path', function(hooks) {
  setupApplicationTest(hooks);

  test('everything works so far', async function(assert) {
    let exerciseService = this.owner.lookup('service:exercise');
    sinon.stub(exerciseService, 'fetch').resolves(exerciseData);

    await visit('/');

    assert.dom('[data-test-exercise="1"]').hasText('Exercise 1');

    await click('[data-test-exercise="1"]');

    assert.url.equals('/exercise/1');
    assert.dom('[data-test-exercise-title]').hasText('Exercise 1');
    assert.dom('[data-test-play-button]').exists();
    assert.dom('[data-test-pause-button]').doesNotExist();

    click('[data-test-play-button]');
    await waitFor('[data-test-pause-button]');
  });
});
