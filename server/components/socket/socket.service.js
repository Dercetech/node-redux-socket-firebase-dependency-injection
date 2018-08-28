const SocketIO = require('socket.io');
const Hapi = require('hapi');

module.exports = function factory(ENV, logger) {
  // Websocket definition
  const { port } = ENV.socket;
  const server = Hapi.server({ port });
  const io = SocketIO.listen(server.listener);

  // Registered clients
  // const sockets = [];

  io.on('connection', socket => {
    // sockets.push(socket);
    // socket.emit('message', { user: 'root', text: 'Welcome!' });
    socket.on('disconnect', () => {
      // sockets.splice(sockets.indexOf(socket), 1);
    });
  });

  function start() {
    return server.start();
  }

  function getIO() {
    return io;
  }

  function broadcast(name, data) {
    sockets.forEach(socket => socket.emit(name, data));
  }

  return { start, getIO, broadcast };
};
