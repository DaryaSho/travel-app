import { model, Schema, Model, Document } from 'mongoose';

export interface IPlace extends Document {
  countryId: Schema.Types.ObjectId,
  imageUrl: string,
  localizations: [{
    lang: string;
    name: string;
    capital: string;
    description: string
  }];
}

const placeLocaleSchema = new Schema({
  _id: false,
  lang: { type: String, required: true },
  name: String,
  description: String
});

const PlaceSchema: Schema = new Schema({
  countryId: { type: Schema.Types.ObjectId, require: true },
  imageUrl: { type: String, require: true },
  localizations: [placeLocaleSchema]
});

export const Place: Model<IPlace> = model('country', PlaceSchema);
