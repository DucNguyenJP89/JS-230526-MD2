import React, { useState } from 'react';

function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
    })
    const setValue = (e) => {
        const key = e.target.name;
        setUser(user => ({
            ...user,
            [key] : e.target.value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
            <form action="">
                <div>
                    Username: <input type="text" name="username" id="username" onChange={setValue}/>
                </div>
                <div>
                    Email: <input type="email" name="email" id="email" onChange={setValue}/>
                </div>
                <div>
                    Password: <input type="password" name="password" id="password" onChange={setValue}/>
                </div>
                <div>
                    Gender: 
                    Male <input type="radio" name="gender" id="male" value="male" onClick={setValue}/>
                    Female <input type="radio" name="gender" id="female" value="female" onClick={setValue}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Register