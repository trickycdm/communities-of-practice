const { readdirSync, statSync, existsSync } = require('fs');
const { join } = require('path');

const SERVICES_PATH = `${__dirname}/../src/Api/services`;

const defaultStubConfig = (methodPath, method) => ({
  route: `/${method}`,
  method: 'get',
  middleware: (req, res) => res.json({ error: `This is an auto generated stub. Please add ${method}.stub.json to ${methodPath}` }),
});

/**
 * Build our stub server config given a dir struc like:
 * service
 *  - {service-name}
 *    - methods
 *      {methods-name}
 *        -{method-name}.stub.js
 * @returns {*}
 */
module.exports.getStubConfig = () => {
  const methodPaths = readdirSync(SERVICES_PATH)
    .filter(service => statSync(join(SERVICES_PATH, service)).isDirectory())
    .map(service => join(SERVICES_PATH, service, 'methods'));

  // you could combine this map with the one above but it gets difficult to reason. Given this is a one time parse on app start I can like with this less performant approach
  return methodPaths.map(methodPath => (
    readdirSync(methodPath)
      .filter(method => statSync(join(methodPath, method)).isDirectory())
      .map((method) => {
        const stubConfigPath = `${methodPath}/${method}/${method}.stub.js`;
        // it is discouraged to use dynamic requires and requires within lexical scope. Additionally ESLint wont like it but we are in control of this and it is the cleanest way to do it.
        /*eslint-disable */
        if (existsSync(stubConfigPath)) {
          const config = require(stubConfigPath);
          return config.stubConfig || config;
        };
        //*eslint-enable */
        return defaultStubConfig(methodPath, method);
      })
  ))
  // flatten our 2d array into a single array of all methods
    .reduce((prev, curr) => prev.concat(curr));
};

