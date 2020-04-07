import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class extends Component {
  get style() {
    return htmlSafe(`
      width: 100px;
      height: 100px;
      background-color: ${this.args.action.color || 'white'}
    `);
  }
}
