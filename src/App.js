import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './component/HomePage/Home/Home';
import NotFound from './component/NotFound/NotFound';
import DoctorHomePage from './component/DoctorPage/DoctorHomePage/DoctorHomePage';
import Location from './component/LocationPage/Location/Location';
import Careear from './component/Careears/Careear/Careear';

function App() {
  return (
    <div className="App">
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
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
