import { Router } from 'express';
import CountriesController from '../controllers/countriesController';

const countriesRouter: Router = Router();

countriesRouter.get(
  '/countries-list',
  CountriesController.getAllCountries
);

countriesRouter.get(
  '/:id',
  CountriesController.getCountryById
);

export default countriesRouter;
