import Controller from '@ember/controller';

export default class EventsIndexController extends Controller {
    actions = {
        deleteEvent(event) {
            event.destroyRecord();
        },
    }
}
