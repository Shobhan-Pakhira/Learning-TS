import React from 'react'
import perks from '../assets/perks.png'
import icn from '../assets/icon.png'
import perksBG from '../assets/perksBG.png'

type PerksItem = {
    heading: string,
    subtext: string,
    icon?: string,
  }
  
const PerksData = [
    {
        heading: "Curated techincal curriculam for entry and mid-senior level positions in industry.",
        icon: icn
    },
    {
        heading: "Curated techincal curriculam for entry and mid-senior level positions in industry.",
        icon: icn
    },
    {
        heading: "Curated techincal curriculam for entry and mid-senior level positions in industry.",
        icon: icn
    },
    {
        heading: "Curated techincal curriculam for entry and mid-senior level positions in industry.",
        icon: icn
    }
]
const Perks = () => {
  return (
    <div className=' d-flex row' style={{height:"720px", backgroundImage:`url(${perksBG})`, backgroundSize:"cover"}}>
        <div className='d-flex col justify-content-center align-items-center'>
            <div>
                <div className='mb-4'>
                    <h1 className='display-5 m-0'><strong>The Best In Business </strong></h1>
                    <p>Use this section to show off one of your features in great detail.</p>
                </div>
                <div>
                    {PerksData.map((item,idx) => (
                        <div key={idx} className='d-flex col align-items-start' style={{width:"485px"}}>
                            <div> <img src={item.icon} alt='icn' style={{height:"48px"}}/> </div>
                            <div className='ms-3 mb-3'>
                                <div><strong>{item.heading}</strong></div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            <div>
                <img src={perks} alt='market' />
            </div>
        </div>
    </div>
  )
}

export default Perks
