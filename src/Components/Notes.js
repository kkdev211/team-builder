import React from "react";

const Notes = props => {
  return (
    <div className="note-list">
      {props.teamMembers.map(teamMember => (
        <div className="note" key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;

