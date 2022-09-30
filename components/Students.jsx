import { Link } from "react-router-dom";
import React , {useState} from "react";
import data from './data.json';

const Students = () =>{
    
    const [contacts, setContacts] = useState(data);
    return(
        <div>
              <p id="heading">
              <Link className="one" to ="/">Home</Link>  
              <Link className="one" to ="/Students">Students</Link>  
              <Link className="one" to ="/ContactUs">Contact Us</Link>  
            </p>
             <h1 id="studentpage">Students Details</h1>
             <Link to="/AddStudent"><button id="btn">Add new student</button></Link>
             <table border = '1'>
               <thead>
               <tr>
                    <th className="table1">Name</th>
                    <th >Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
               </thead>
                <tbody>
                {contacts.map((contact) =>(
                <tr>
                    <td>{contact.Name}</td>
                    <td>{contact.Age}</td>
                    <td>{contact.Course}</td>
                    <td>{contact.Batch}</td>
                    <Link to ="/"><td>Edit</td></Link>
                </tr>
                ))}
                </tbody>
             </table>
         
       
        </div>
    )
}
export default Students;
