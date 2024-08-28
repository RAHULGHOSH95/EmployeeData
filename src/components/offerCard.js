import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyOffer } from '../redux/actions';

const OfferCard = ({ salary, age }) => {
  const dispatch = useDispatch();
  const offer = useSelector(state => state.offer);

  const determineOffer = () => {
    if (age > 45 && age < 60 && salary < 100000) {
      return "7000 per month";
    } else if (age < 45 && salary > 100000) {
      return "1200 per month";
    } else if (age > 60 && salary < 100000) {
      return "2000 per month";
    }
    return "No suitable offer available";
  };

  const handleApplyOffer = () => {
    const currentOffer = determineOffer();
    dispatch(applyOffer(currentOffer));
    alert(`Offer Applied: ${currentOffer}`);
  };

  return (
    <div className="offer-card">
      <h3>Gym Membership Offer</h3>
      <p>Offer: {determineOffer()}</p>
      <button onClick={handleApplyOffer}>Apply for Offer</button>
    </div>
  );
};

export default OfferCard;