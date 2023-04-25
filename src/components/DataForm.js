import React, { useState } from 'react'

export default function DataForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [favcolor, setFavcolor] = useState('')
    const [favcar, setFavcar] = useState('')

    const submitData=(e)=>{
        e.preventDefault();
        const user = {firstName, lastName, email, favcolor, favcar};
        console.log(user);

        fetch("http://localhost:8080/users", {
            method : "POST",
            body : JSON.stringify(user),
            headers : {"Content-Type" : "application/json"}
        });
    }


  return (
    <>
        <div className='container mt-3'>
            <form>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">First Name</label>
                    <input type="text" className="col form-control" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Last Name</label>
                    <input type="text" className="col form-control" id="lastname" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Email address</label>
                    <input type="email" className="col form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Favourite Color</label>
                    <input type="text" className="col form-control" id="favcolor" value={favcolor} onChange={(e)=>setFavcolor(e.target.value)}/>
                </div>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Favourite Car</label>
                    <input type="text" className="col form-control" id="favcar" value={favcar} onChange={(e)=>setFavcar(e.target.value)}/>
                </div>
                <div className='container text-center mt-4'>
                    <button type="submit" className="text-center btn btn-primary" onClick={submitData}>Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}
