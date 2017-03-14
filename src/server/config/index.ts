import * as path from 'path';
import * as R from 'ramda';

export default R.merge(
    getAllConfig(),
    // tslint:disable-next-line
    require('./' + (process.env.NODE_ENV || 'development') + '.js') || {});

/**
 * All configurations will extend these options
 */
function getAllConfig() {
  return {
    // Log level. Can be debug, warn, info, error
    logLevel: process.env.LOG_LEVEL || 'debug',

    // Main node environment
    env: process.env.NODE_ENV || 'development',

    // Version in package.json
    version: '1.0.0',

    // Root path of server
    staticContentPath: process.env.STATIC_CONTENT_PATH || path.join(__dirname, '../../../dist/public'),

    // Server port
    port: process.env.PORT || 3000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // context path for main url
    contextRoot: process.env.CONTEXT_ROOT || 'reports',
  };
}
