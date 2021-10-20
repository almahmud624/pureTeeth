import './App.css';
import Header from './Component/Shared/Header/Header';
import Login from './Component/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Registration from './Component/Registration/Registration';
import Services from './Component/Home/Services/Services';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Doctors from './Component/Home/Home/Doctors/Doctors';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Shared/Footer/Footer';
import AllServices from './Component/AllServices/AllServices';
import Blogs from './Component/Home/Blogs/Blogs';
import AllBlogs from './Component/AllBlogs/AllBlogs';
import AboutUs from './Component/AboutUs/AboutUs';
import ContactUs from './Component/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path='/service-details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path='/all-services'>
              <AllServices></AllServices>
            </PrivateRoute>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path='/all-blogs'>
              <AllBlogs></AllBlogs>
            </PrivateRoute>
            <Route path='*'>
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
