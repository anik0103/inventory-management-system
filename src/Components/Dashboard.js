import React from 'react';
import SummaryCards from './Dash/SummaryCards';
import SalesOverview from './Dash/SalesOverview';
import TopProducts from './Dash/TopProducts';
import OrderStatus from './Dash/OrderStatus';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="bg-orange-300 font-bold text-2xl mb-4 p-4 rounded">
        Inventory Management Dashboard
      </h1>
      <p className="mb-6 text-gray-600">
        Welcome to the Inventory Management System. Here you can manage your inventory efficiently.
      </p>

      <SummaryCards />
      <SalesOverview />
      <TopProducts />
      <OrderStatus />    
    </div>
  );
};

export default Dashboard;
