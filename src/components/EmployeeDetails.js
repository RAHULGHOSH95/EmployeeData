import React from 'react';
import { useSelector } from 'react-redux';
import OfferCard from './offerCard';

const EmployeeDetails = () => {
  const employee = useSelector(state => state.selectedEmployee);

  if (!employee) {
    return (
      <div className="details-message">
        Please select an employee.
      </div>
    );
  }

  return (
    <div className="employee-details">
      <h2>{employee.name}</h2>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Salary:</strong> ${employee.salary}</p>
      <p><strong>Favorite Sport:</strong> {employee.favoriteSport}</p>
      <p><strong>Matches:</strong> {employee.matches.join(', ')}</p>
      <p><strong>Accomplishments:</strong> {employee.accomplishments.join(', ')}</p>
      <OfferCard salary={employee.salary} age={employee.age} />
    </div>
  );
};

export default EmployeeDetails;