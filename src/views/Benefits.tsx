import React from 'react'
import bicn from '../assets/icn2.png'

type BenefitItem = {
    heading: string,
    subtext: string,
    icon?: string,
  }

const BenefitItem = [
    {
        icon: bicn,
        heading: " No Preparation since its a beginner friendly course. ",
        subtext: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
    },
    {
        icon: bicn,
        heading: " No Preparation since its a beginner friendly course. ",
        subtext: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
    },
    {
        icon: bicn,
        heading: " No Preparation since its a beginner friendly course. ",
        subtext: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "
    }
]

const Benefits = () => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center' style={{height:"350px"}}>
        <div className='d-flex align-items-center justify-content-space-around'>
            <div className='d-flex col'>
                {BenefitItem.map((item, idx) => (
                    <div style={{width:"290px", height:"180px"}}>
                        <div><img src={item.icon} alt="icn"/></div>
                        <div>
                            <div><strong>{item.heading}</strong></div>
                            <div>{item.subtext}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Benefits