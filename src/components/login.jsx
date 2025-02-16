import { useState } from 'react';
import axios from 'axios';
import { UserNameInput, PasswordInput } from './userCredComponents';




const Login = () => {

    const [userNameEmail, setUserNameEmail] = useState("Nani@saraswat.com");
    const [password, setPassword] = useState("Nani@1234Saraswat!!!");

    const handleClick = async () => { 
        const body = {
            "userName" :  { 
                "email" : userNameEmail
            }, 
                "password" : password

        }
        await axios.post(
            "http://localhost:7777/familyInfo/auth/login",
            body,
             {
                 withCredentials : true
             }
            );
    }

    return (
    
     <div className = "flex justify-center mt-32">
        <div className="card bg-base-300 w-96 shadow-sm flex justify-center">
            <div className="card-body my-8">
                    <h2 className="card-title">Login</h2>
                 
                    <UserNameInput className = "mt-4" onChange = {(e) => {setUserNameEmail(e.target.value)}}/>
                 
                    <PasswordInput className = "-mt-6" onChange = {(e) => {setPassword(e.target.value)}}/>
                
                 
                <div className="card-actions justify-end">

                <button className="btn btn-primary mr-32 mt-4" onClick = {handleClick}>Login</button>
                </div>
            </div>
        </div>
    </div>
    
    );

}


export { Login } ;

