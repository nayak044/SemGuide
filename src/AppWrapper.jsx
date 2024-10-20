// AppWrapper.js
import React from 'react';

import { useUserRole } from 'src/auth/useUserRole'; // Adjust the import path as necessary
import { UserRoleProvider } from 'src/auth/userRoleContext';

import App from './app';
 
const AppWrapper = () => {
  const { userRole, setUserRole } = useUserRole();

  return (
    <UserRoleProvider value={{ userRole, setUserRole }}>
      <App />
    </UserRoleProvider>
  );
};

export default AppWrapper;
