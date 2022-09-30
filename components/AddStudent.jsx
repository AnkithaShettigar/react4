import React from 'react'
import { Link } from 'react-router-dom';


export class AddStudent extends React.Component {

    constructor(){
        super();
        this.state = {
            Name:'',
            Age:'',
            Course:'',
            Batch:'',
            showName:false
        }
    }

    updateName = (event) =>{
        this.setState({Name:event.target.value})
    }
    updateAge = (event) =>{
        this.setState({Age:event.target.value})
    }
    updateCourse = (event) =>{
        this.setState({Course:event.target.value})
    }
    updateBatch = (event) =>{
        this.setState({Batch:event.target.value})
    }
    handleShowName = () =>{
        const updateArray = this.props.users
        updateArray.push({Name:this.state.Name,Age:this.state.Age,Course:this.state.Course,Batch:this.state.Batch})
        this.props.updateUsers(updateArray)
       this.setState({showName: true})
    }
    render(){
    return(
        <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <p><input type="text"  value={this.state.Name} onChange={this.updateName}/></p>
        <p><input type="number"  value={this.state.Age} onChange={this.updateAge}/></p>
        <p><input type="text"  value={this.state.Course} onChange={this.updateCourse}/></p>
        <p><input type="text"  value={this.state.Batch} onChange={this.updateBatch}/></p>
        <Link to="/"><button>Cancel</button></Link>
        <Link to="/Students"> <button onClick={this.handleShowName}>Update</button></Link>
        {this.state.showName && 
        <p id="box2">
         {this.state.arr.map(item =>{
         return(
                 <p id='box'>{`Name :${item.Name} | Age : ${item.Age} | Course :${item.Course} | Age :${item.Batch} `}</p>
            )
         })
        }
        </p>
   }
       </div> 
        
    )
 }
}


export default AddStudent;
