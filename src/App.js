import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeCard from './components/EmployeeCard';
import EmployeeDetails from './components/offerCard';
import employeeData from './assets/empdata.json';

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>Employee Gym Membership</h1>
      <div className="employee-list">
        {employeeData.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
      <EmployeeDetails />
    </div>
  </Provider>
);

export default App;