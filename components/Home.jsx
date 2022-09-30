import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <div>
            <p id="heading">
              <Link className="one" to ="/">Home</Link>  
              <Link className="one" to ="/Students">Students</Link>  
              <Link className="one" to ="/ContactUs">Contact Us</Link>  
            </p>
            <p id="Homepage">Home Page</p>

        </div>
   
    )
}
export default Home;