module.exports = function factory(logger) {
  const TYPES = {
    CLIENT_CONNECTED: 'SOCKET_CLIENT_CONNECTED',
    CLIENT_DISCONNECTED: 'SOCKET_CLIENT_DISCONNECTED'
  };

  function clientConnected(socket) {
    const name = TYPES.CLIENT_CONNECTED;
    if (!socket) {
      logger.error(`[Socket] Action ${type} needs parameter "socket"`);
    }
    return { name, payload: { socket } };
  }

  function clientDisconnected(socket) {
    const name = TYPES.CLIENT_DISCONNECTED;
    if (!socket) {
      logger.error(`[Socket] Action ${type} needs parameter "socket"`);
    }
    return { name, payload: { socket } };
  }

  return { TYPES, clientConnected, clientDisconnected };
};
