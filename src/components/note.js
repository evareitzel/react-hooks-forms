// Form before Parent component

import React, { useState } from "react";
// import NewsletterForm from "./NewsletterForm"

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(e){
    setFirstName(e.target.value)   
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }
 
  return (
    <>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {/* <NewsletterForm /> */}
    </>
  );
}

export default Form;
