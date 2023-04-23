import React, { useEffect } from "react";
//import { Link } from "react-router-dom";
import { fetchUsers } from "../app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Userlist(){
    const dispatch= useDispatch();

    const users= useSelector( (state)=>{ return state.user });

    useEffect( ()=>{
        dispatch(fetchUsers()); 
    },[]);


    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="mt-3 content-justyfy-start">Userlist</h3>
                    
                    {
                        users.loading && <div className="spineer-border text-primary">
                            Loading...
                        </div>
                    }
                    
                    <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.user.map( (getUser, index)=>(
                                <tr key={index}>
                                <td>{ index+1} </td>
                                <td>{getUser.username}</td>
                                <td>{getUser.email}</td>
                                <td>{getUser.phone}</td>
                                <td>{getUser.address}</td>
                                </tr>
                            ))
                        }
               

                    </tbody>
                    </table>
                   
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default Userlist;