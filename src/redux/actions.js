import {SELECT_EMPLOYEE,APPLY_OFFER} from './actionTypes'
export const selectEmployee = (employee) => ({
  type: SELECT_EMPLOYEE,
  payload: employee
});

export const applyOffer = (offer) => ({
  type: APPLY_OFFER,
  payload: offer
});
