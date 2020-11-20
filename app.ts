import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import setMongo from './mongo';
import setRoutes from './routes/routes';

const swaggerUi = require('swagger-ui-express');

// import { swaggerDocument } from "./data/swagger"


const app = express();
dotenv.config();
app.set('port', (process.env.PORT || 8080));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

async function main(): Promise<any> {
  try {
    await setMongo();
    setRoutes(app);
    app.get('/*', (req, res) => {
      res.send("OK");
    });
    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`Challenge Stack listening on port ${app.get('port')}`));
    }
  } catch (err) {
    console.error(err);
  }
}

main();

export { app };
