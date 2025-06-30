const Dashboard = () => {
  return (
    <div className="dashboard">
        <h1>Inventory Management Dashboard</h1>
        <p>Welcome to the Inventory Management System. Here you can manage your inventory efficiently.</p>
        <div className="dashboard-links">
            <a href="/products" className="dashboard-link">Manage Products</a>
            <a href="/categories" className="dashboard-link">Manage Categories</a>
            <a href="/suppliers" className="dashboard-link">Manage Suppliers</a>
            <a href="/orders" className="dashboard-link">Manage Orders</a>
        </div>
    </div>
  );
}
 export default Dashboard;

// Note: This code is a simple React component that serves as a dashboard for an inventory management system. 
// It includes links to manage products, categories, suppliers, and orders. 
// You can customize the links and styles as per your requirements.