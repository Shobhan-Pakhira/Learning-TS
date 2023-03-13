import React from 'react'
import market from '../assets/marketing.png'
import icn from '../assets/icon.png'

type SyllabusItem = {
    heading: string,
    subtext: string,
    icon?: string,
  }
  
const FeatureData = [
    {
        heading: "200+ hours of live training",
        subtext: "To the right (or left) of your feature text, you can add a product display just like the ones in the hero section.",
        icon: icn
    },
    {
        heading: "200+ hours of live training",
        subtext: "To the right (or left) of your feature text, you can add a product display just like the ones in the hero section.",
        icon: icn
    },
    {
        heading: "200+ hours of live training",
        subtext: "To the right (or left) of your feature text, you can add a product display just like the ones in the hero section.",
        icon: icn
    },
    {
        heading: "200+ hours of live training",
        subtext: "To the right (or left) of your feature text, you can add a product display just like the ones in the hero section.",
        icon: icn
    }
]
const Features = () => {
  return (
    <div className='container-fluid d-flex' style={{height:"720px", backgroundColor:"#F8F9FA"}}>
        <div className='d-flex col justify-content-center align-items-center'>
            <div>
                <img src={market} alt='market' />
            </div>
            <div>
                <div className='mb-4'>
                    <h1 className='display-5 m-0'><strong>Level up your marketing </strong></h1>
                    <p>Use this section to show off one of your features in great detail.</p>
                </div>
                <div>
                    {FeatureData.map((item,idx) => (
                        <div key={idx} className='d-flex col align-items-start' style={{width:"485px"}}>
                            <div> <img src={item.icon} alt='icn' style={{height:"48px"}}/> </div>
                            <div className='ms-3 mb-3'>
                                <div><strong>{item.heading}</strong></div>
                                <div>{item.subtext}</div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            </div>
        </div>
  )
}

export default Features
