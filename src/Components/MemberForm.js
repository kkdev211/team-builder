import React, { useState } from "react";

const MemberForm = props => {
console.log(props);
    //3 set up state for Form
 const [teamMember, setTeamMember] = useState({
    id: "initial id",
    name: "",
    email: "",
    role: ""

 });
 //4 set up OnChange event when input text changes
 const handleChanges = event => {
     console.log("event", event.target.value);
     console.log("name", event.target.name);
     //5 use text input value to update state
     setTeamMember({...teamMember, [event.target.name]:event.target.value});
 };
 //8 create submit form function with addNewTeamMember prop
 const submitForm = event => {
     console.log("submitting!");
     event.preventDefault();
     props.addNewTeamMember(teamMember);
     setTeamMember({id: "", name: "", email: "", role: ""});
     // last step- clear form
 };

//1&2 create basic <form> with <input> and add label for htmlFor
return(
    <form onSubmit= {submitForm}>
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            placeholder="Enter name" 
            id="name"
            name="name"
            value={teamMember.name}
            onChange={handleChanges}/>
            <br></br>
         <label htmlFor="email">Email</label>    
            <textarea 
            id="email" 
            name="email" 
            placeholder="Enter email" 
            value={teamMember.email} 
            onChange={handleChanges}/>
            <br></br>
        <label htmlFor="role">Role</label>
            <textarea 
            id="role" 
            name="role" 
            placeholder="Enter role" 
            value={teamMember.role} 
            onChange={handleChanges}/>
      {/* Step 9: Submit form with button and onSubmit */}
      <br></br>
      <button type="submit">Add Member</button>
    </form>
 );
};
export default MemberForm;
