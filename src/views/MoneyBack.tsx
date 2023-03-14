import React from 'react'
import perks from '../assets/perks.png'
import icn from '../assets/icon.png'
import Money from '../assets/Money.png'

type MoneyBackItem = {
    heading: string,
    subtext: string,
    icon?: string,
}

const MoneyBackData = [
    {
        heading: "350+ companies for company-specific interview.",
        icon: icn
    },
    {
        heading: "2,000+ Happy and Satisfied students.",
        icon: icn
    },
    {
        heading: "50+ domains to choose from.",
        icon: icn
    },
    {
        heading: "100% money back, if not satisfied.",
        icon: icn
    },
    {
        heading: "Learn from industry experts & YTS mentors.",
        icon: icn
    }
]
const MoneyBack = () => {
    return (
        <div className=' d-flex row' style={{ height: "720px", backgroundColor: "#B6E7FF" }}>
            <div className='d-flex col justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 mb-4'><strong>100% Moneyback Guarantee </strong></h1>
                    <div>
                        {MoneyBackData.map((item, idx) => (
                            <div key={idx} className='d-flex col align-items-center mb-3' style={{ width: "485px" }}>
                                <div> <img src={item.icon} alt='icn' style={{ height: "48px" }} /> </div>
                                <div className='ms-3' style={{ fontSize: "17px" }}>
                                    <strong>{item.heading}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={Money} alt='market' />
                </div>
            </div>
        </div>
    )
}

export default MoneyBack
