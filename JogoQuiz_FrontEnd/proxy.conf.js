const PROXY_CONFIG = [
  {
    context: ['/auth', '/app-quiz'],
    target:'https://deploy-gateway-service-production.up.railway.app',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
