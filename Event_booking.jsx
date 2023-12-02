import React from 'react'
import './style.css'

const Event_booking = () => {
  return (
    <>
    
    <div className='event-booking-div'>
    <h1>Event booking</h1>
                {/* <form className='form'>
                <h5>Book Event</h5>
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="-Name-"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input type="text" className="form-control" id="address" aria-describedby="emailHelp" placeholder="-Address-"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="-Phone-"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="noOf-people">No. of People</label>
                      <input type="text" className="form-control" id="noOf-people" aria-describedby="emailHelp" placeholder="-No of people-"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
            <div class="row d-flex justify-content-center">
              <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
               <h3>Book Events</h3>
                  <div class="card">
                      <form className="form-card" onsubmit="event.preventDefault()">
                          <div class="row justify-content-between text-left">
                              <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                              <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                          </div>
                          <div class="row justify-content-between text-left">
                              <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Event Name<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                              <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Venue<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                          </div>
                          <div class="row justify-content-between text-left">
                              <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">No. of People<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                          </div>
                          <div class="row justify-content-between text-left">
                              <div className="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Upload Image<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                          </div>
                          <div class="row justify-content-end">
                              <div className="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Book event</button> </div>
                          </div>
                      </form>
                  </div>
            </div>
          </div>
     </div>
    </>
  )
}

export default Event_booking;