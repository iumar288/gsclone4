import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'f567e97b-0a67-4bae-b607-eabbdc6bc627',
  login: 'fT@13T\\/cm4\\"t\\ViU\\_A',
};

export const sampleWithPartialData: IUser = {
  id: '958ca8aa-c0b9-4bdc-b567-1bb2f9da858c',
  login: 'dMSo6',
};

export const sampleWithFullData: IUser = {
  id: '75340a5b-0376-48ff-9561-c90539b304ef',
  login: 'Qfv@Y-hwn',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
