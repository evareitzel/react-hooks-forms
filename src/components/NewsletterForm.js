import React, {useState} from "react"

function NewsletterForm(){
  const [newsletter, setNewsletter] = useState(false)

  function handleNewsletterChange(e){
    // checked, not .value!
    setNewsletter(e.target.checked)
  }

  return(
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        // checked instead of value
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewsletterForm