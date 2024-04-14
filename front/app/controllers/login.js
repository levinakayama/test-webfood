import Controller from '@ember/controller';


export default class LoginController extends Controller {
    actions = {
        updateValue(e) {
            let model = this.get('model')
            model[e.target.name] = e.target.value
        },
        submit(e) {
            e.preventDefault();
            let model = this.get('model')
            console.log('submit', model.get('email'));
        },
    };
}
