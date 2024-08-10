import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/Customer';
import { fetchCustomers } from './services/api';
import './App.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const customersData = await fetchCustomers(); 
        setCustomers(customersData); 
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    };
    loadCustomers();
  }, []); 

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app-container">
      <header>
        <h1>Customer Portal</h1>
      </header>
      <div className="main-content">
        <CustomerList customers={customers} selectedCustomerId={selectedCustomerId} onSelectCustomer={handleSelectCustomer} />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
