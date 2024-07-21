import React, { createContext, useContext, useState } from 'react';


const TransactionList = createContext();


export const TransactionListItem = ({ children }) => {
  const [transactions] = useState([
    { id: '1', name: 'Starbucks', amount: 12, date: '2024-01-05', location: 'Aryle Mall, London' },
    { id: '2', name: 'Apple Store', amount: 30, date: '2024-05-07', location: 'Burj Al Arab, Dubai' },
    { id: '3', name: 'Sephora', amount: 100, date: '2024-04-03', location: 'Downtown, London' },
    { id: '4', name: 'Pizza', amount: 20, date: '2024-03-04', location: 'Richmond Street, London' },
  ]);

  
  return (
    <TransactionList.Provider value={transactions}>
      {children}
    </TransactionList.Provider>
  );
};


export const TransactionContext = () => {
  return useContext(TransactionList);
};
