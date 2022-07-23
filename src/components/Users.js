import React, { useState } from "react";
import User from './User';


const Users = ({ users }) => {
    return (
        <div class="flex-container">
            {users.map((user) => {
                return <User key={user.id} {...user}/>
            })}
        </div>
    );
}


export default Users;

