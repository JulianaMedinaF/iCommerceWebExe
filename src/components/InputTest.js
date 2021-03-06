import React, { Fragment, useState } from "react";

const InputTest = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description};
            const response = await fetch("http://localhost:8080/test", {
                method: "POST",
                headers: {"Content-type":"application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5"> Pern Todo Test</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text" 
                       className="form-control" 
                       value={description} 
                       onChange={ e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default InputTest;