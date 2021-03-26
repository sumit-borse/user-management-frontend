import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Header from './Components/header';
import Footer from './Components/footer';
import EmployeeForm from './Components/form';
import UpdateEmployee from './Components/updateEmployeeDetails';
import Table from './Components/table';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <Router >
    
    <Route path="/displayUser" component={Table} />
    <Route path="/addNewUser" component={EmployeeForm} />
    <Route path="/editUser" component={UpdateEmployee} />

  </Router>,
  document.getElementById('containerDiv')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);
