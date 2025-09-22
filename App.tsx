
import React from 'react';
import { User } from './types';
import Dashboard from './components/Dashboard';
import { USERS } from './constants';

const App: React.FC = () => {
  const user: User = USERS['dktr610@gmail.com'];

  return (
    <div className="min-h-screen bg-navy-900 font-sans">
      <Dashboard user={user} />
    </div>
  );
};

export default App;
