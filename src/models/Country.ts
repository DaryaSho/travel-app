import { model, Schema, Model, Document } from 'mongoose';

export interface ICountry extends Document {
  imageUrl: string;
  videoUrl: string;
  ISOCode: string;
  capitalLocation: {
    coordinates: [number];
    type: string
  };
  localizations: [{
    lang: string;
    name: string;
    capital: string;
    description: string
  }];
}

const localeSchema: Schema = new Schema({
  _id: false,
  lang: { type: String, required: true },
  name: { type: String, required: true },
  capital: { type: String, required: true },
  description: { type: String, required: true }
});

const CountrySchema: Schema = new Schema({
  imageUrl: String,
  videoUrl: String,
  currency: { type: String, required: true },
  ISOCode: { type: String, uppercase: true, unique: true, required: true },
  capitalLocation: {
    coordinates: { type: [Number], required: true },
    type: { type: String, enum: ['Point'], required: true }
  },
  localizations: [localeSchema]
});

export const Country: Model<ICountry> = model('country', CountrySchema);
