import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { restartableTask } from 'ember-concurrency-decorators';
import { taskFor } from 'ember-concurrency-ts';
import { timeout } from 'lungebox/utils/ember-concurrency';

const FADE_TIMEOUT = 1000;

export default class extends Component<{
  isRunning: boolean;
  isPaused: boolean;
  onPause(): void;
  onStop(): void;
}> {
  @tracked isHidden = true;

  @restartableTask async hideAfterTimeout() {
    await timeout(FADE_TIMEOUT);

    this.isHidden = true;
  }

  show() {
    this.isHidden = false;
    taskFor(this.hideAfterTimeout).perform();
  }

  _keyboardEventCallback!: ((event: KeyboardEvent) => void);
  _mouseMoveCallback!: ((event: MouseEvent) => void);

  @action attachEventListener() {
    this._keyboardEventCallback = (event) => {
      if (event.key === 'Escape') {
        if (this.args.isRunning) {
          this.args.onStop();
        } else {
          this.show();
        }
      } else if (event.key === ' ') {
        this.isHidden = false;
        this.args.onPause();
      }
    };

    this._mouseMoveCallback = () => {
      this.show();
    };

    window.addEventListener('keyup', this._keyboardEventCallback);
    window.addEventListener('mousemove', this._mouseMoveCallback);
  }

  @action removeEventListener() {
    window.removeEventListener('keyup', this._keyboardEventCallback);
    window.removeEventListener('mousemove', this._mouseMoveCallback);
  }
}
