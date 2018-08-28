module.exports = function factory(
  logger,
  // socket store
  socketStoreKey,
  socketActions,
  // chat store
  chatStoreKey
) {
  const key = chatStoreKey;

  function initialize(state) {
    logger.spam(`[${key} : store] Registering state, reducer & effects`);

    // Classic redux store
    state[key] = {
      messages: []
    };
  }

  function reduce(state, action) {
    const { name, payload } = action;
    const slice = { ...state[key] };

    switch (name) {
      default: {
        logger.spam(`[${key} : reducer] no action handler for type ${name}`);
      }
    }

    return { ...state, [key]: slice };
  }

  function effect(state, action) {
    const { name, payload } = action;
    const slice = state[key];
    const socketSlice = state[socketStoreKey];

    switch (name) {
      case socketActions.TYPES.CLIENT_CONNECTED: {
        logger.info(`[${key} : effect] client connected, must be sent 10 last messages`);
        break;
      }

      case socketActions.TYPES.CLIENT_DISCONNECTED: {
        const socketToRemove = payload.socket;
        slice.sockets = slice.sockets.filter(socket => socket !== socketToRemove);
        logger.info(`[${key} : effect] client disconnected, must warn other users`);
        break;
      }

      default: {
        logger.spam(`[${key} : effect] no side effect for type ${name}`);
      }
    }
  }

  return {
    initialize,
    reduce,
    effect
  };
};
