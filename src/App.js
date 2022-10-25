import { render } from "react-dom";
import './App.css';
import {
  Routes,
  Route,
  Link} from "react-router-dom";
import Header from './components/header/Header'
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ErrorBlock from "./components/errorBlock/ErrorBlock";
import LoginPage from "./pages/loginPage/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import {useEffect,useState} from "react"
import CreateAdPage from "./pages/createAdPage/CreateAdPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "./api/Api";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { housesSliceAction } from "./redux/housesSlice";


function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getHouses()
        .then((res) => {
        console.log(res);
         
         dispatch(housesSliceAction.setData(res.data))
      })
      .catch()
  }, []);
return (
    <div className="App">
     <Header/>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage  
          />}/>
      <Route path="/product/:id" element={<ProductPage />}/>
      <Route path="/login" element={
        <PublicRoute>
           <LoginPage/>
        </PublicRoute>
     
      } />
      <Route 
            path="/dashboard" 
            element={
            <PrivateRoute>
            <Dashboard/>
            </PrivateRoute>
            } 
            />
            <Route path="/create-ad" element={
              <PrivateRoute>
            <CreateAdPage/>
            </PrivateRoute>
            } />
      <Route path="*" element={<ErrorBlock text="Page not found"/>} />
    </Routes>   
      <ToastContainer/>    
    </div>
    
  );
}

export default App;
