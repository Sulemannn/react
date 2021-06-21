import { React, useState, useEffect } from 'react'
import axios from 'axios'

const HeroesLists = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {

        const url = "http://localhost:8000/heroes/add"

        axios.get(url)
            .then(response => {
                setHeroes(response.data)
            })

    }, []);

    return (
        <div>
            <h1>Add Heroes</h1>
            <input onClick={this.props.onClick}></input>

        </div>
    );
}

export default HeroesLists;