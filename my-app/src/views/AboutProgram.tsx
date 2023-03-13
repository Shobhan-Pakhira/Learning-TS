import React from 'react'
import sideimg from '../assets/1st.png'

type SyllabusItem = {
  heading: string,
  subText: string,
  image?: string,
}

const SyllabusData: SyllabusItem[] = [
  {
    heading: "First Step",
    subText: "At the beginning you have to sign up and verify your account",
    image: sideimg
  },
  {
    heading: "First Step",
    subText: "At the beginning you have to sign up and verify your account",
    image: sideimg
  },
  {
    heading: "First Step",
    subText: "At the beginning you have to sign up and verify your account",
    image: sideimg
  },
]

const AboutProgram = () => {
  return (
    <div className='container' style={{ height: 'auto' }}>
      <div className='d-flex row justify-content-center'>
        <div>
          <h1 className='display-4 text-center'><strong> How it works </strong></h1>
          <h6 className='text-center'> Step by step to get started </h6>
        </div>
        <div className='d-flex row justify-content-center'>
          {SyllabusData.map((item, index) => (
            <div className='d-flex col vw-100' key={index} style={{ height:'350px'}}>
              <div>
                <h3>{item.heading}</h3>
                <p>{item.subText}</p>
              </div>
              <img src={item.image} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutProgram
