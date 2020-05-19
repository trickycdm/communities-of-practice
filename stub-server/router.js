const router = require('express').Router();
const cors = require('cors');

router.use(cors());
const { getStubConfig } = require('./helpers');

const stubConfig = getStubConfig();

stubConfig
  .forEach(stub => router[stub.method](stub.route, stub.middleware));

module.exports = router;
