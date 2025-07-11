import './App.css';
import Dashboard from './Components/Dashbord/Dashboard'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Head from './Components/Product/Head';


function App() {
  // const appRouter= createBrowserRouter([
  //   {
  //     path:"/",
  //    element:<Dashboard/>,
  //    children:[
  //     {
  //       path:"/",
  //       element:<Dashboard/>
  //     },
  //     {
  //       path:"/My Orders",
  //       element:<h1></h1>
  //     },
  //     {
  //       path:"/Browse Products",
  //       element:<h1></h1>
  //     },
  //     {
  //       path:"/request Products",
  //       element:<h1></h1>
  //     },
  //     {
  //       path:"/Logout",
  //       element:<h1></h1>
  //     }
  //    ]

  //   }
  // ])
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
