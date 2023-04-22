import React from "react";

function Userlist(){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="mt-3">Userlist</h3>
                    <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>test@gmail.com</td>
                    <td>9990909999</td>
                    </tr>

                    </tbody>
                    </table>
                   
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default Userlist;