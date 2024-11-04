const PROXY_CONFIG = [
  {
    context: ['/auth', '/app-quiz'],
    target:'http://localhost:8765/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
