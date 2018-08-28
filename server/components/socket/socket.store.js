module.exports = function factory(
  logger,
  store,
  // socket store
  socketStoreKey,
  socketService,
  socketActions
) {
  const key = socketStoreKey;

  function _initializeReduxSocket() {
    const io = socketService.getIO();
    io.on('connection', socket => {
      store.dispatch(socketActions.clientConnected(socket));

      // Action on client disconnected
      socket.on('disconnect', () => store.dispatch(socketActions.clientDisconnected(socket)));
    });
  }

  function initialize(state) {
    logger.spam(`[${key} : store] Registering state, reducer & effects`);

    // Classic redux store
    state[key] = {
      sockets: []
    };

    // Bind socket events to redux actions
    _initializeReduxSocket();
  }

  function reduce(state, action) {
    const { name, payload } = action;
    const slice = { ...state[key] };

    switch (name) {
      case socketActions.TYPES.CLIENT_CONNECTED: {
        const socketToAdd = payload.socket;
        slice.sockets = [...slice.sockets, socketToAdd];
        break;
      }

      case socketActions.TYPES.CLIENT_DISCONNECTED: {
        const socketToRemove = payload.socket;
        slice.sockets = slice.sockets.filter(socket => socket !== socketToRemove);
        break;
      }

      default: {
        logger.spam(`[${key} : reducer] no action handler for type ${name}`);
      }
    }

    return { ...state, [key]: slice };
  }

  function effect(state, action) {
    const { name, payload } = action;
    const slice = state[key];

    switch (name) {
      case socketActions.TYPES.CLIENT_CONNECTED: {
        logger.info(`[${key} : effect] client connected, total: ${slice.sockets.length} clients`);
        break;
      }

      case socketActions.TYPES.CLIENT_DISCONNECTED: {
        const socketToRemove = payload.socket;
        slice.sockets = slice.sockets.filter(socket => socket !== socketToRemove);
        logger.info(`[${key} : effect] client disconnected, remaining: ${slice.sockets.length} clients`);
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
