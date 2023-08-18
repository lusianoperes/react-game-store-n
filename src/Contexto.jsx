import React, { createContext, useState } from 'react';
import usersData from './users-data.json'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [UserId, setUserId] = useState(1);
  const [UsersData, setUsersData] = useState(usersData);
  

  return (
    <MyContext.Provider value={{ UserId, setUserId, UsersData, setUsersData}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };