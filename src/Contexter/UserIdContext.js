import React, { createContext, useState, useEffect } from 'react';

export const UserIdContext = createContext();

export const UserIDProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    // Kontrollera om användar-ID redan finns sparad i localStorage
    const existingUserID = localStorage.getItem('userID');

    // Om användar-ID inte finns, generera ett nytt och spara det
    if (!existingUserID) {
      const newUserID = generateUserID();
      localStorage.setItem('userID', newUserID);
      setUserID(newUserID);
    } else {
      setUserID(existingUserID);
    }
  }, []);

  // Funktion för att generera ett användar-ID
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
