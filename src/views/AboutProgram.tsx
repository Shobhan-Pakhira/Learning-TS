import React from 'react'
import sideimg from '../assets/1st.png'

const AboutProgram = () => {
  return (
    <div className='container mt-5' style={{ height: 'auto' }}>
      <div className='d-flex row justify-content-center'>
        <div>
          <h1 className='display-4 text-center'><strong> How it works </strong></h1>
          <h6 className='text-center'> Step by step to get started </h6>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12 p-4">
            <img src={sideimg} alt='sidimg'/>
          </div>
          <div className="col-md-6 col-sm-12 p-4">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, optio.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-4">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, optio.</h2>
          </div>
          <div className="col-md-6 col-sm-12 p-4">
            <img src={sideimg} alt='sidimg'/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-4">
            <img src={sideimg} alt='sidimg'/>
          </div>
          <div className="col-md-6 col-sm-12 p-4">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, optio.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProgram

{/* <div className='d-flex row justify-content-center'>
  {SyllabusData.map((item, index) => (
    <div className='d-flex col vw-100' key={index} style={{ height:'350px'}}>
      <div>
        <h3>{item.heading}</h3>
        <p>{item.subText}</p>
      </div>
      <img src={item.image} alt="img" />
    </div>
  ))}
</div> */}