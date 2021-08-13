import React, { Fragment, useEffect, useState } from "react";
import EditTest from "./EditTest";

const ListTest = () => {

    const [tests, setTests] = useState([]);

    //delete test
    const deleteTest = async (id) => {
        try {
            const deleteTest = await fetch(`http://localhost:8080/test/${id}`,{
                method:"DELETE"
            });
            setTests(tests.filter(test => test.id !== id));
        } catch (err) {
            console.log(err.message);
        }
    };

    const getTests = async () => {
        try {
            const response = await fetch("http://localhost:8080/test");
            const jsonData = await response.json();

            setTests(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getTests();
    }, []);

    return <Fragment>
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tests.map(test => (
                    <tr key ={test.id}>
                        <td>{test.description}</td>
                        <td><EditTest test = {test}/></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTest(test.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>


    </Fragment>;
};

export default ListTest;