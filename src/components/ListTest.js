import React, { Fragment, useEffect, useState } from "react";

const ListTest = () => {

    const [tests, setTests] = useState([]);

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
                    <tr>
                        <td>{test.description}</td>
                        <td>Edit</td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>


    </Fragment>;
};

export default ListTest;