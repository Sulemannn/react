import { React, useState, useEffect } from 'react'
import axios from 'axios'

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {

        const url = "http://localhost:3499/students/add"

        axios.get(url)
            .then(response => {
                setStudents(response.data)
            })

    }, []);

    return (
        <div>
            <h1>Add students</h1>
            <input onClick={this.props.onClick}></input>

        </div>
    );
}

export default StudentsList;