'use strict';

class ActionsManager {
  constructor(client) {
    this.client = client;

    // These symbols represent fully built data that we inject at times when calling actions manually.
    // Action#getUser for example, will return the injected data (which is assumed to be a built structure)
    // instead of trying to make it from provided data
    this.injectedUser = Symbol('djs.actions.injectedUser');
    this.injectedChannel = Symbol('djs.actions.injectedChannel');
    this.injectedMessage = Symbol('djs.actions.injectedMessage');

  }

  register(Action) {
    this[Action.name.replace(/Action$/, '')] = new Action(this.client);
  }
}

module.exports = ActionsManager;
