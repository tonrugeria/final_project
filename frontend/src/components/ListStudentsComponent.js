import React, { useState, useEffect } from 'react'
import StudentService from '../services/StudentService'


const ListStudentComponents = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })

    }, [])

    return (
        <div className="container">
            <h2 className="text-center"> List of Students </h2>
            <table className="table table-bordered table-striped">
                <thead>
                <   th> Student Id </th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Student Department </th>
                    <th> Student Course </th>
                    <th> Student Address </th>
                    <th> Student Phone </th>
                    <th> Student Email Id </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key={student.id}>
                                <td> {student.id} </td>
                                <td> {student.firstName} </td>
                                <td> {student.lastName} </td>
                                <td> {student.department} </td>
                                <td> {student.course} </td>
                                <td> {student.address} </td>
                                <td> {student.phone} </td>
                                <td> {student.emailId} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponents
