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
      <Dashboard />
      <Sidebar />
      <Head/>
      <Filters/>
      <ProductTable/>
    </div>
  );
}
//Taslim's test for PR!!
export default App;