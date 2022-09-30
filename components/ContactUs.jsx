import { Link } from "react-router-dom";
const ContactUs = () =>{
    return(
        <div>
             <p id="heading">
              <Link className="one" to ="/">Home</Link>  
              <Link className="one" to ="/Students">Students</Link>  
              <Link className="one" to ="/ContactUs">Contact Us</Link>  
            </p>
            <p id="Homepage">Contact Us Page</p>
        </div>
    )
}
export default ContactUs;