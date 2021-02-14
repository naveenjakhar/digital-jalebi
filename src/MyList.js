import React from 'react'
import db from './Firebase_config';
export const MyList = ({todo,id}) => {
    const deleteitem=()=>{
       db.collection("todos").doc(id).delete();
       console.log("button toggle");
    }
    return (
        <div>
             <div id="Datafieldb" className="col-11 col-md-12  mt-3 ml-md-3 ml-3 shadow-lg">
                <div className="row"><div id="Datafieldw" className="col-9 col-md-11 mb-4 justify-content-center text-center">{todo}
                
                </div>
                <div className="col-3 col-md-1 mb-4" id="Datafield1"><div   id="delete" onClick={deleteitem} className="d-flex justify-content-center mt-5 shadow-lg "><i class="fas fa-trash-alt fa-1x my-auto"></i></div></div>
              
                </div>
                    
                </div>
        </div>
    )
}
