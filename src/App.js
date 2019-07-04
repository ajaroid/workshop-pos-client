import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './auth/LoginPage';
import DashboardPage from './dashboard/DashboardPage';

function App() {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={DashboardPage} exact />
    </Router>
  );
}

export default App;
