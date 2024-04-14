import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EventsIndexRoute extends Route {
  @service store;
  async model() {
    let rows = await this.store.findAll('event');
    return {
      rows,
    };
  }
}
