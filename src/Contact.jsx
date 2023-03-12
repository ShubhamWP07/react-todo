import React from "react";

let Contact = () => {
  return(
    <>
      <div className="main-form-con">
      <form action="" className="Contact-form">
        <h1 className="form-heading">Contact Us</h1>
        <input type="text" name="" id="" placeholder="Name" className="Contact-form-input-filed" />
        <input type="email" placeholder="Email" className="Contact-form-input-filed"/>
        <input type="text" placeholder="Phone"className="Contact-form-input-filed"/>
        <textarea name="" id="" cols="30" rows="3" placeholder="Message" className="Contact-form-input-filed"></textarea>
        <button className="sumbit-button" type="submit">Submit</button>
      </form>
      </div>
    </>
  )
}

export default Contact;