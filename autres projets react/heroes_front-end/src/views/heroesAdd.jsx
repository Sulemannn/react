import { React, useState, useEffect } from 'react'
import axios from 'axios'

const HeroesList = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {

        const url = "http://localhost:3499/heroes/add"

        axios.get(url)
            .then(response => {
                setStudents(response.data)
            })

    }, []);

    return (
        <div>
            <h1>Add Heroes</h1>
            <input onClick={this.props.onClick}></input>

        </div>
    );
}

export default HeroesList;