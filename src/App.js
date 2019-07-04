import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './auth/LoginPage';
import ProtectedPage from './ProtectedPage';

function App() {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={ProtectedPage} exact />
    </Router>
  );
}

export default App;
