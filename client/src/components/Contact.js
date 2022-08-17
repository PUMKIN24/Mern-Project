import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        PHONE
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>+917907456230</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        EMAIL
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>jer2ymatheww@gmail.com</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        GITHUB
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href="https://github.com/PUMKIN24" target="_blank" style={{  color: 'black',textDecoration:'none' }}>
        <strong >https://github.com/PUMKIN24 </strong>
        </a>
       
 
       
      </div>
    </div>
  </div>
</div>

<br /><br />

<div className="get-in-touch" style={{ padding: '50px 200px' }} >
  
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" > <strong> GET IN TOUCH</strong></label>
  <br /> <br />
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
</div>
<div class="mb-3">
 
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Message"></textarea>
</div>

<button type="submit" class="btn btn-dark">Submit</button>
</div>
    </>
  )
}

export default Contact