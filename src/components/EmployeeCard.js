import { useDispatch } from 'react-redux';
import { selectEmployee } from '../redux/actions';

const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectEmployee(employee));
  };

  return (
    <div className="employee-card" onClick={handleClick}>
      <h3>{employee.name}</h3>
      <p>{employee.favoriteSport}</p>
    </div>
  );
};

export default EmployeeCard;