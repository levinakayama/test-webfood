import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
    actions = {
        submit(e) {
            console.log(e)
        }
    }
}
