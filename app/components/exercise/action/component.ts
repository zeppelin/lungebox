import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class extends Component<{
  onDismiss(): void;
}> {
  _escapeKeyCallback: any = undefined;

  @action attachEventListener() {
    // this._escapeKeyCallback = (event: KeyboardEvent) => {
    //   if (event.key === 'Escape') {
    //     this.args.onDismiss();
    //   }
    // };

    // window.addEventListener('keyup', this._escapeKeyCallback);
  }

  @action removeEventListener() {
    // window.removeEventListener('keyup', this._escapeKeyCallback);
  }
}
