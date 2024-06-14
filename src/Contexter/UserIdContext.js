import React, { createContext, useState, useEffect } from 'react';
//skapa kontext för användar id
export const UserIdContext = createContext();

export const UserIDProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    // Kolla om id redan finns  i localStorage
    const existingUserID = localStorage.getItem('userID');

    // Om användar id inte finns, generera ett nytt, lägg i localstorage
    if (!existingUserID) {
      const newUserID = generateUserID();
      localStorage.setItem('userID', newUserID);
      setUserID(newUserID);
    } else {
      setUserID(existingUserID);
    }
  }, []);

  // Funktion för att skapa ett slump userid
  const generateUserID = () => {
    const NumberLength = 7;
    let userNumber = '';
    for (let i = 0; i < NumberLength; i++) {
      userNumber += Math.floor(Math.random() * 10);
    }
    return userNumber;
  };

  return (
    <UserIdContext.Provider value={userID}>
      {children}
    </UserIdContext.Provider>
  );
};
