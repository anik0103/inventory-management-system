import './App.css';
import Dashboard from './Components/Dashbord/Dashboard'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Head from './Components/Product/Head';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignIn/>
      <SignUp/>
      <Dashboard />
      <Sidebar />
      <Head/>
    </div>
  );
}
//Taslim's test for PR!!
export default App;
