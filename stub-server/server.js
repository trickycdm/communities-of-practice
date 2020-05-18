const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const stubRouter = require('./router');

function getHttpsOptions() {
  return {
    key: fs.readFileSync(path.resolve(`${__dirname}/certs/localhost.key`)),
    cert: fs.readFileSync(path.resolve(`${__dirname}/certs/localhost.crt`)),
  };
}


(async () => {
  try {
    const app = express();
    app.set('port', process.env.NODE_PORT || 4000);
    app.set('httpsPort', 4001);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/', stubRouter);

    http.createServer(app).listen(
      app.get('port'),
      () => console.log(`Server started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`),
    );

    https.createServer(getHttpsOptions(), app).listen(
      app.get('httpsPort'),
      () => console.log(`Server started on https://localhost:${app.get('httpsPort')} press Ctrl-C to terminate.`),
    );

    // we should never need this but helpful if there is a rouge unhandled rejection
    process.on('unhandledRejection', (err) => {
      err.message += `UNHANDLED PROMISE REJECTION: ${err.message}`;
      console.error(err);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
