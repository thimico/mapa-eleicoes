import * as express from 'express';

import PartidoCtrl from '../controllers/partido';

function setRoutes(app): void {
  const router = express.Router();
  const complaintCtrl = new PartidoCtrl();

  // Estados
  router.route('/estados').get(complaintCtrl.getAll);
  router.route('/estados/count').get(complaintCtrl.count);
  router.route('/estados').post(complaintCtrl.insert);
  router.route('/estados/:id').get(complaintCtrl.get);
  router.route('/estados/:estado/municipios').get(complaintCtrl.getPartidoByEstado);
  router.route('/estados/:id').put(complaintCtrl.update);
  router.route('/estados/:id').delete(complaintCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api/eleicao/2014/presidente/primeiro-turno', router);

}

export default setRoutes;
