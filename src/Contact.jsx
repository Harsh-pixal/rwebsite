import React, { useState } from 'react';


const Contact = () => {
  const [data,setdata]=useState({
    Fullname:""
    , phone:"",
    Email:"",
    msg:"",
  });
  const InputEvent=(event)=>{
    const {name,value}=event.target;
    setdata((preval)=>{
      return {
        ...preval,
        [name]:value,
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `My name is ${data.Fullname}. My phone number is ${data.phone},and email is ${data.Email},Here is what i want to say ${data.msg}`
    );

  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                name="Fullname"
                value={data.Fullname}
                onChange={InputEvent}
                 placeholder="Enter you name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                 name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                 name="Email"
                value={data.Email}
                onChange={InputEvent}
                placeholder="Enter you phone number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message for developers</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                name="msg"
                value={data.msg}
                onChange={InputEvent}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
