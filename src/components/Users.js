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


// const Users = ({ users }) => {
//     return (
//         <div class="flex-container">
//             {users.map((user) => {

//                 const { id, name, location, image } = user;
//                 return (
//                     <div class="flex-items">
//                         <article key={id} className="user-card person">
//                             <div className="flex-item">
//                                 <img src={image} />
//                             </div>
//                             <div className="flex-item">
//                                 <h4>{name}</h4>
//                                 <h6>{location}</h6>
//                             </div>
//                         </article>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }