import React, {useState} from 'react';
import ReactDOM from "react-dom";
import MemberForm from './Components/MemberForm';
import logo from './logo.svg';
import './App.css';



function App() {
 //1- set UseState
 const [teamMembers, setTeamMembers] = useState([
   {
    id:1,
    name:"Bugs Bunny",
    email: "lovesCarrots@acme.com",
    role: "Lead Mischief Maker"
   }
]);
//6 create function that will update 'team member' with param values passed
const addNewTeamMember = member => {
  const newTeamMember ={
    id: Date.now(),
    title: member.title
  };
  setTeamMembers([...teamMembers, newTeamMember])
}
  return (
    <div className="App">
      <header className="App-header">
      <h1> ACME Team Members</h1>
      {/*7 pass addNewTeamMember as a prop into Form */}
      <MemberForm addNewTeamMember={addNewTeamMember} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
