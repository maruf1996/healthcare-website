import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './component/HomePage/Home/Home';
import NotFound from './component/NotFound/NotFound';
import DoctorHomePage from './component/DoctorPage/DoctorHomePage/DoctorHomePage';
import Location from './component/LocationPage/Location/Location';
import Careear from './component/Careears/Careear/Careear';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import ServiceDetails from './component/HomePage/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/location">
              <Location></Location>
            </Route>
            <Route path="/doctor">
              <DoctorHomePage></DoctorHomePage>
            </Route>
            <Route path="/careears">
              <Careear></Careear>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails> 
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
