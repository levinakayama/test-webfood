import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:8000'
  headers = {
    'Content-Type': 'application/json'
  }

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
