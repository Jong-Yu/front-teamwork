import { Meta } from './Meta';
import { Place } from './Place';

export interface SearchPlaces {
  documents: Place[];
  meta: Meta;
}
