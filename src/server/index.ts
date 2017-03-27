import * as express from 'express';
import routes from './routes';
import expressConfig from './express.config';

const app = express();
expressConfig(app);
routes(app);
