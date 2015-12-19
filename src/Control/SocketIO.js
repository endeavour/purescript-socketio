// module Control.SocketIO

export.stringify = function stringify(x) {
    return JSON.stringify(x);\
  };

export.connect = function connect(host) {
    return function() {
      return io.connect(host);
    };
  };

export.onImpl = function onImpl(sock, channel, onMessage) {
    return function() {
      sock.on(channel, function(m){ onMessage(m)();});
    };
  };

export.emitImpl = function emitImpl(sock, channel) {
    return function() {
      sock.emit(channel);
    };
  };

export.emitMsgImpl = function emitMsgImpl(sock, channel, emitMessage) {
    return function() {
      sock.emit(channel, emitMessage);
    };
  };
