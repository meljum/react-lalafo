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


function App() {
  const [housesArray,setHousesArray]  = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    Api.getHouses()
      .finally(() => {
        setLoading(false)
      })
      .then((res) => {
        console.log(res);
         setHousesArray(res.data)
      })
      .catch()
  }, []);
return (
    <div className="App">
     <Header/>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage isLoading={isLoading} housesArray={housesArray}
          />}/>
      <Route path="/product/:id" element={<ProductPage />}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route 
            path="/dashboard" 
            element={
            <Dashboard isLoading={isLoading} housesArray={housesArray}/>
            } 
            />
            <Route path="/create-ad" element={<CreateAdPage/>} />
      <Route path="*" element={<ErrorBlock text="Page not found"/>} />
    </Routes>   
      <ToastContainer/>    
    </div>
    
  );
}

export default App;
