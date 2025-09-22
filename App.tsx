
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { User } from './types';
import Dashboard from './components/Dashboard';
import VinLanding from './components/VinLanding';
import { USERS } from './constants';

const App: React.FC = () => {
  const user: User = USERS['dktr610@gmail.com'];

  return (
    <Router basename="/traffic-management-system">
      <div className="min-h-screen bg-navy-900 font-sans">
        <Routes>
          <Route path="/" element={<VinLanding />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/dashboard/*" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
