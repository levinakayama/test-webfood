import Model, { attr } from '@ember-data/model';

export default class LoginModel extends Model {
  @attr('string', { defaultValue: 'teste@default.com'}) email;
  @attr('string') pass;
}
