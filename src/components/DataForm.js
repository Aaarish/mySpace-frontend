import React, { useState } from 'react'
import Test from './Test';

export default function DataForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    const submitData=(e)=>{
        e.preventDefault();
        
        const userCreds = {email, password};
        console.log(userCreds);

        let status = null;

        fetch("http://localhost:8080/auth/login", {
            method : "POST",
            body : JSON.stringify(userCreds),
            headers : {"Content-Type" : "application/json"}
        }).then(response => {
            let res = response.text();

            status = response.status;
            console.log(res);
            console.log(status);
        }).then(response => {
            if(status === 201)
                setIsFetching(true)
        });
    }


  return (
    <>
        {
            !isFetching ? 
            <div className='container mt-3'>
            <form id='login-form'>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Email address</label>
                    <input type="email" className="col form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="row mb-3 w-50 mx-auto">
                    <label className="col form-label">Password</label>
                    <input type="password" className="col form-control" id="favcolor" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='container text-center mt-4'>
                    <button type="submit" className="text-center btn btn-primary" onClick={submitData}>Submit</button>
                </div>
            </form>
        </div>
        : 
        <Test/>
        }
    </>
  )
}
