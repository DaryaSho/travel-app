import { Response, Request } from 'express';
import { Types } from 'mongoose';
import { Country } from '../models/Country';
import { PLACES_COLLECTION_NAME } from '../constants';

const DEFAULT_LANG = 'ENG';
const countryExcludedFields = { _id: 0, __v: 0, lang: 0, localizations: 0 };
const placeExcludedFields = { _id: 0, countryId: 0, lang: 0, localizations: 0 };

class CountriesController {
  async getAllCountries (req:Request, res:Response): Promise<void> {
    try {
      const lang = req.query.lang || DEFAULT_LANG;
      console.log(DEFAULT_LANG);
      const countries = await Country.aggregate()
        .match({ localizations: { $elemMatch: { lang } } })
        .unwind('localizations')
        .match({ 'localizations.lang': lang })
        .replaceRoot({
          $mergeObjects: [{ id: '$_id' }, '$localizations', '$$ROOT']
        })
        .project(countryExcludedFields);

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
      const { lang } = req.query || DEFAULT_LANG;

      const country = await Country.aggregate()
        .match({ _id: Types.ObjectId(id) })
        .unwind('localizations')
        .match({ 'localizations.lang': lang })
        .replaceRoot({
          $mergeObjects: [{ id: '$_id' }, '$localizations', '$$ROOT']
        })
        .project(countryExcludedFields)
        .lookup({
          from: PLACES_COLLECTION_NAME,
          pipeline: [
            {
              $match: { countryId: Types.ObjectId(id) }
            },
            { $unwind: '$localizations' },
            {
              $match: { 'localizations.lang': lang }
            },
            {
              $replaceWith: { $mergeObjects: ['$localizations', '$$ROOT'] }
            },
            { $project: placeExcludedFields }
          ],
          as: 'places'
        });

      if (!country[0]) {
        res.status(404).send({ message: 'Country not found' });
        return;
      }

      res.status(200).json(country[0]);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new CountriesController();
