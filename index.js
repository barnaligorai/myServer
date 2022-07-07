const { startServer } = require('./src/server/startServer.js');
const { parseBody } = require('./src/server/parseBody.js');
const { injectCookies } = require('./src/server/injectCookies.js');
const { injectSession } = require('./src/server/injectSession.js');
const { createRouter } = require('./src/server/createRouter.js');
const { fileHandler } = require('./src/handler/fileHandler.js');
const { notFound } = require('./src/handler/notFound.js');

module.exports = {
  startServer,
  parseBody,
  injectSession,
  injectCookies,
  createRouter,
  notFound,
  fileHandler
};
