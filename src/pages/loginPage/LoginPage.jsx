
import { useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../../components/title/Title"
import { authSliceAction } from "../../redux/authSlice";
import css from "./LoginPage.module.css"


function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const dispatch = useDispatch()
   
    const submit = (e) => {
        e.preventDefault();
         if(login === "admin" && password === "admin"){
          dispatch(authSliceAction.setAuth(true)) 
        }else{
            setError("Login or Password incorrect")
        }
    }

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
        setError("")
    }
    const handlePasswordChange = (e) => {
       setPassword(e.target.value)
       setError("")
    }
    
    return (
        <div className="page">
            <Title position="center">Войти</Title>
            <form className={css.form} onSubmit={submit}>
                <input className={css.input} value={login} onChange={handleLoginChange}  type="text" placeholder="Login" />
                <input className={css.input} value={password} onChange={handlePasswordChange}  type="password" placeholder="Password" />
                <button className={css.button}>
                 Войти
                </button> 
                <div className="error-message">{error}</div>
            </form>
            
        </div>

    )
}

export default LoginPage