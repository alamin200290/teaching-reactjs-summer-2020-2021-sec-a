import User from './User.js';

export default function(userlist){
   
	return (
        `<table border=1>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Dept</th>
                <th>Action</th>
            </tr>
            
            ${
                userlist.map((u)=>{
                    return User(u);
                }).join(' ')
            }
        </table>`
    );
}