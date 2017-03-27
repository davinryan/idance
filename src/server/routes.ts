import * as express from 'express';
import config from './config';

export default function routes(app) {

  // Main API

  // Main Application routes
  app.use('/reports', express.static(config.staticContentPath));
};



