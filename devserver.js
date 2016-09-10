const dev = require('react-devpack');

dev.startServer({
  proxy: 'http://localhost:8094/api',
});
