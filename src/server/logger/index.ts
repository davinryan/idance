import Logger from './Logger';
import * as winston from 'winston';
import config from '../config';

const consoleTransport = new winston.transports.Console({
  colorize: true,
  timestamp: false,
});

const winstonLogger = new (winston.Logger)({
  level: config.logLevel,
  timestamp: true,
  transports: [
    consoleTransport
  ]
});

export function getLogger(type: string) {
  return new Logger(type, winstonLogger);
}