import React, { Fragment, useState} from "react";

const EditTest = ({test}) =>{
    const[description, setDescription] = useState(test.description);

    // edit description
    const updateDescription = async(e) =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:8080/test/${test.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }
            );
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    }



    return(
        <Fragment>

<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${test.id}`}>
  Edit
</button>

<div class="modal fade" id={`id${test.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit test</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(test.description)}></button>
      </div>
      <div class="modal-body">
        <input type="text" 
               className="form-control" 
               value={description}
               onChange={e => setDescription(e.target.value)} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDescription(test.description)}>Close</button>
        <button type="button" class="btn btn-warning" onClick = {e => updateDescription(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </Fragment>
    )
};

export default EditTest;