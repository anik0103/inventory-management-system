import './App.css';
import Dashboard from './Components/Dashbord/Dashboard'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp />
      <Dashboard />

    </div>
  );
}

export default App;
