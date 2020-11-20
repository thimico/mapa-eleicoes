import Partido from '../models/partido';
import BaseCtrl from './base';

class PartidoCtrl extends BaseCtrl {
  model = Partido;

  getPartidoByEstado = async (req, res) => {
    try {
      let city = req.params.city.replace(/\+/g, " ");
      let company = req.params.company.replace(/\+/g, " ");
      console.log(city)
      console.log(company)
      await this.model.find({
        // $and: [
        //   { "locale": { $regex: "^" + city + "$", $options: "i" } },
        //   { "company": { $regex: "^" + company + "$", $options: "i" } }
        // ]
      }, { _id: 0 }).then((result) => {
        res.status(200).send({ partidosCount: result.length, partidos: result })
      })
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

}


export default PartidoCtrl;
