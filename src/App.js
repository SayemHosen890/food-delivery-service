import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Detail from './components/Detail/Detail';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices/ManageServices';
import Order from './components/Order/Order';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Combo from './components/Combo/Combo';
import Register from './components/Register/Register';
import OrderPlace from './components/OrderPlace/OrderPlace';

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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/manageorder">
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="/manageservices">
              <ManageServices></ManageServices>
            </Route>
            <PrivateRoute path="/detail/:detailId">
              <Detail></Detail>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="orderplace">
              <OrderPlace></OrderPlace>
            </Route>
            <Route path="combo">
              <Combo></Combo>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

