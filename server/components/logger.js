module.exports = function factory(ENV) {
  return {
    spam: message => ENV.log >= 3 && console.log(message),
    info: message => ENV.log >= 2 && console.log(message),
    warn: message => ENV.log >= 1 && console.warn(message),
    error: message => ENV.log >= 0 && console.error(message)
  };
};
