import * as express from 'express';
import * as winston from 'winston';
import * as path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
winston.info(path.join(__dirname, '../../dist/public'));

// if (config.getEnv() === 'production') {
//   app.use('/reports', express.static(path.join(__dirname, '../public')));
// } else {
  app.use('/reports', express.static(path.join(__dirname, '../../dist/public')));
// }

app.listen(3000, () => {
  // console.log(winston);
  // winston.info('Example app listening on port 3000!');
});
