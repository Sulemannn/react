// import { React, useState, useEffect } from 'react'
// import axios from 'axios'

// const StudentsList = () => {
//     const [students, setStudents] = useState([]);

//     useEffect(() => {

//         const url = "http://localhost:3499/students"

//         axios.get(url)
//             .then(response => {
//                 setStudents(response.data)
//             })

//     }, []);

//     return (
//         <div>
//             <h1>Students List</h1>
//             <ul>
//                 {
//                     students.map(elem => {
//                         return <li>{elem.name}</li>
//                     })
//                 }
//             </ul>

//         </div>
//     );
// }

// export default StudentsList;

// not adapted to heroe syet !! 