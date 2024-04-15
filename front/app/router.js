import EmberRouter from '@ember/routing/router';
import config from 'front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('dashboard');

  this.route('events', function () {
    this.route('add');
    this.route('edit',{path:'/edit/:event_id'});
  });
});
