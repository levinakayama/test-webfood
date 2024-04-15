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
      let model = this.get('model')
      model.save()
      this.router.transitionTo('events.index');
    },
  };
}
