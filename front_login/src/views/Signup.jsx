import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    let history = useHistory()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(2);

    const [userCreated, setUserCreated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            history.push("/admin")
        }
    }, [])

    const signup = async () => {
        try {
            const response = await axios.post("http://localhost:8003/auth/signup", { username, password, role })

            console.log(response);
            if (response.status === 200) {
                setUserCreated(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (userCreated) {
        return ("User created!")
    } else {
        return (
            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="text" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="text" className="col-sm-2 col-form-label">Surname</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="text" className="col-sm-2 col-form-label">Date of birth</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputRole" onChange={(e) => setRole(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <button type="submit" className="btn btn-primary mb-3" onClick={signup}>Email</button>
                    </div>

                    <div className="mb-3 row">
                        <button type="inputPassword" className="btn btn-primary mb-3" onClick={signup}>Password</button>
                    </div>

                    <div className="mb-3 row">
                        <button type="inputPassword" className="btn btn-primary mb-3" onClick={signup}>Confirm Password</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Signup;
