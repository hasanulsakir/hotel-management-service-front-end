
// #React Css 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// #react-Dom 
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

// #React Route Import 
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import LoginRedirect from './component/PrivateRoute/LoginRedirect';
import Addservice from './Dashborad/Addservice/Addservice';
import Dashborad from './Dashborad/Dashborad';
import AllServices from './Dashborad/AllServices/AllServices';
import SingleService from './Dashborad/AllServices/SingleService';
import UpdateService from './Dashborad/AllServices/UpdateService';
import ManageOrder from './Dashborad/ManageOrder/ManageOrder';
import MyOrders from './Dashborad/MyOrder/MyOrders';
import UpdateOrder from './Dashborad/ManageOrder/UpdateOrder';


// #Main 

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/contact">
        <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
      <Dashborad></Dashborad>
          </PrivateRoute>
          <PrivateRoute exact path="/addservice">
       <Addservice></Addservice>
          </PrivateRoute>
          <PrivateRoute exact path="/service/:ID">
      <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute exact path="/updateservice/:ID">
     <UpdateService></UpdateService>
          </PrivateRoute>
          <PrivateRoute exact path="/updateorder/:ID">
     <UpdateOrder></UpdateOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/allservices">
     <AllServices></AllServices>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorder">
     <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/myorder">
    <MyOrders></MyOrders>
          </PrivateRoute>
          <LoginRedirect exact path="/login">
      <Login></Login>
          </LoginRedirect>
          <Route exact path="">
    <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
