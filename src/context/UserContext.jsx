import React, { createContext, useState } from 'react';

// Create a Context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Vanshika Tomar', age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
