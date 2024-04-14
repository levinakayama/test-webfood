import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class LoginController extends Controller {
    @service router;

    actions = {
        updateValue(e) {
            let model = this.get('model')
            model[e.target.name] = e.target.value
        },
        submit(e) {
            e.preventDefault();
            console.log('submit', this.get('model.email'), this.get('model.pass'));
            this.router.transitionTo('index');
        },
    };
}
