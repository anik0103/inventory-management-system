import './App.css';
import Dashboard from './Components/Dashbord/Dashboard'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Head from './Components/Product/Head';
import Filters from './Components/Product/Filters';
import ProductTable from './Components/Product/ProductTable';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignIn/>
      <SignUp/>
      <Sidebar />
<<<<<<< HEAD
      <Dashboard />
      
      
=======
      <Head/>
      <Filters/>
<<<<<<< HEAD
>>>>>>> 9bd833682ce904902ba0beaca4d9430179c71cf2
=======
      <ProductTable/>
>>>>>>> 4969d1e55233729938c6e91923b22d5bdc822671
    </div>
  );
}
//Taslim's test for PR!!
export default App;