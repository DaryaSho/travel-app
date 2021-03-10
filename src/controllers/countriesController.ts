import { Response, Request } from 'express';
import { Country } from '../models/Country';

class CountriesController {
  async getAllCountries (req:Request, res:Response): Promise<void> {
    try {
      const countries = await Country.find({});

      if (!countries) {
        res.status(404).send({ message: 'Scores not found' });
        return;
      }

      res.status(200).json(countries);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getCountryById (req:Request, res:Response): Promise<void> {
    try {
      const { id } = req.params;

      const country = await Country.findOne({ id });

      if (!country) {
        res.status(404).send({ message: 'Country not found' });
        return;
      }

      res.status(200).json(country);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new CountriesController();
