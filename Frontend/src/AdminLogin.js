import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

function AdminLogin() {
    
    const [username, setUserName] = ("");
    const [password, setPassword] = ("");

    return(
        <div>
            <form>
                <label>Username</label>
                <input type="text"/>

                <label>Password</label>
                <input type="password"/>

                <button>Login</button>
                    
            </form>
        </div>
    )

}
export default AdminLogin;