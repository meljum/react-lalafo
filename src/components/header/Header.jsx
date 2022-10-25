import React from "react";
import css from "./Header.module.css"
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { authSliceAction } from "../../redux/authSlice";



function Header(){
    const isAuth = useSelector((state) => state.auth.isAuth)
    console.log("HEADER COMPONENT:",isAuth );
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authSliceAction.logout())
    }
    return(
        <header className={css.wrapper}>
            <Link to="/" className={css.logo}>LOGO</Link>
            <div className={css.links}>
              <Link to="/about">О нас</Link> 
              <Link to="/contacts">Контакты</Link>
              {
              isAuth ? (<div>
                       <Link to="/dashboard">Кабинет </Link> 
                       <span onClick={handleLogout}>Выйти</span>
                       </div>
              ) : (
              <Link to="/login">Войти</Link>
              )
              } 
            </div>    
        </header>
    )
}

export default Header