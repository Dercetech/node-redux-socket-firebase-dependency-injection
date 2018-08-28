const { BehaviorSubject } = require('rxjs');

module.exports = function factory(logger) {
  const stores = [];
  let state = {};

  const state$ = new BehaviorSubject(state);

  function dispatch(action) {
    logger.spam(`[root store] dispatching action ${action.name}`);
    stores.forEach(store => (state = store.reduce(state, action)));
    stores.forEach(store => store.effect(state, action));
    state$.next(state);
  }

  function addStore(store) {
    stores.push(store);
    store.initialize(state);
    state$.next(state);
  }

  return { dispatch, addStore, state$ };
};
