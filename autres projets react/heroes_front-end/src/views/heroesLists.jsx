import { React, useState, useEffect } from 'react'
import axios from 'axios'

const HeroesAdd = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {

        const url = "http://localhost:8000/heroes"

        axios.get(url)
            .then(response => {
                setHeroes(response.data)
            })

    }, []);

    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {
                    students.map(elem => {
                        return <li>{elem.name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default HeroesAdd;
