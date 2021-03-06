// module Control.SocketIO

exports.stringify = function stringify(x) {
    return JSON.stringify(x);
  };

exports.connect = function connect(io) {
    return function(host) {
      return function() {
        return io.connect(host);
      };
    };
  };

exports.onImpl = function onImpl(sock, channel, onMessage) {
    return function() {
      sock.on(channel, function(m){ onMessage(m)();});
    };
  };

exports.emitImpl = function emitImpl(sock, channel) {
    return function() {
      sock.emit(channel);
    };
  };

exports.emitMsgImpl = function emitMsgImpl(sock, channel, emitMessage) {
    return function() {
      sock.emit(channel, emitMessage);
    };
  };
