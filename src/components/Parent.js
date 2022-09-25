import React, {useState} from "react"
import Form from "./Form"
import DisplayData from "./DisplayData" 
// import NewsletterForm from "./NewsletterForm"

function Parent(){
  const [firstName, setFirstName] = useState("Johnny")
  const [lastName, setLastName] = useState("Law")
  
  function handleFirstNameChange(e){
    setFirstName(e.target.value)   
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName}/>

    </div>
  )
}

export default Parent