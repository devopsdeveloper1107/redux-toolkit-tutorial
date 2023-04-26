import React, { useState } from "react";
import { addUser } from "../app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Adduser()
{
     const dispatch= useDispatch();
     const navigate= useNavigate();

     const { isSuccess } = useSelector( (state)=> state.user);
    const[inputValue, setInputValue]= useState({username:'', email:'', phone:'',address:''});
    
    const handleInput= (e)=>{
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser(inputValue))
        //console.log(inputValue);

        setTimeout( ()=>{
            navigate("/userlist");
        },2000);

    }

    return(
        <React.Fragment>
             <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <h3 className="mt-3">Add New User</h3>
                     {
                        isSuccess!=='' && <p className="text-primary"> { isSuccess.success} </p>
                     }
                    <form onSubmit={ handleSubmit}>
                        <div className="row mb-3">
                            <lable  className="col-sm-3 col-form-lable">Username</lable>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="username" placeholder="Enter Username" value={inputValue.username} onChange={ handleInput}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable  className="col-sm-3 col-form-lable">Email</lable>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="email" placeholder="Enter Email"  value={inputValue.email} onChange={ handleInput}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable className="col-sm-3 col-form-lable">Phone No</lable>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="phone" placeholder="Enter Phone" value={inputValue.phone} onChange={ handleInput}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable  className="col-sm-3 col-form-lable">Address</lable>
                            <div className="col-md-8">
                                <input type="text" className="form-control" name="address" placeholder="Enter Address" value={inputValue.address} onChange={ handleInput}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <lable  className="col-sm-3 col-form-lable"></lable>
                            <div className="col-md-1">
                               <button type="submit" className="btn btn-info bnt-lg">Submit</button> 
                                 </div>
                        </div>
                    </form>



                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Adduser;