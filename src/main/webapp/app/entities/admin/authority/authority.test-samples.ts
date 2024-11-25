import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e3284605-b5b5-4298-9b49-a422513c8c20',
};

export const sampleWithPartialData: IAuthority = {
  name: '1d0f266e-7cc6-4047-9381-c248e0a4b1fb',
};

export const sampleWithFullData: IAuthority = {
  name: 'dd0a4dd2-fdea-4ab1-bd12-d3a0a74aaa91',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
