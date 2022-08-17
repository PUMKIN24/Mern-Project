import React from 'react'
import mypic from '../images/mypic.jpeg'

const About = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-4">
              <img src={mypic} alt="" />
           </div> 
          </div>
        </form>
      </div>
    </>
  )
}

export default About