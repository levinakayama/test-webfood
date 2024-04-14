import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class EventsAddController extends Controller {
  @service router;

  actions = {
    updateValue(e) {
      let model = this.model;
      model[e.target.name] = e.target.value;
    },
    submit(e) {
      e.preventDefault();
      console.log('submit', this.get('model.name'));
      this.router.transitionTo('events.index');
    },
  };
}
