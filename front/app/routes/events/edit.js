import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EventsEditRoute extends Route {
    @service store;

  async model(params) {
    return this.store.findRecord('event', params.event_id);
  }
}
