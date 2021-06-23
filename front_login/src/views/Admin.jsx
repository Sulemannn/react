import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Admin = () => {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState("");

    useEffect(async () => {
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get("http://localhost:8003/users/", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            if (response.status === 200) {
                setUsers(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }, []);

    if (!users) {
        return (
            <div>
                You don't have acces to the list of users.
            </div>
        );
    } else {
        return (

            <div className="row">
                <div className="offset-3 col-6 mx-auto">
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Prénom</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Nom</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}


export default Admin;
