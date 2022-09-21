import React from 'react'
import '../Hero/Hero.css'

function Hero() {
  return (
    <div className='hero-sec'>
        <div className='xxx'>
           <div className='hero-txt' >
            <p>Companies we have helped grow</p>
        </div>

        <div className='hero-logos'>
            <img src='assets/Group.svg' alt='logo1'/>
            <img src='assets/Group2.svg' alt='logo1'/>
            <img src='assets/Group3.svg' alt='logo1'/>
            <img src='assets/Group4.svg' alt='logo1'/>
            <img src='assets/Group5.svg' alt='logo1'/>
            <img src='assets/Group6.svg' alt='logo1'/>
            <img src='assets/Group7.svg' alt='logo1'/>
        </div> 
        </div>

        <div className='whyash'>
            <div className='whyash1'>
                <h5>WHY AR SHAKIR</h5>
                <p>Specially Designed For Crypto Payments</p>
            </div>
        </div>

        <div className='blw-why'>
            <div className='heroimg'>
                <img src="assets/Group2-1.svg" alt="img1" />

                <div className='hero-sec-1'>
                    <h3>Quick Summaries</h3>
                </div>
            </div>

            <div className='heroimg'>
                <img src="assets/Group2-2.svg" alt="img2" />

                <div className='hero-sec-2'>
                    <h3>Manage your wallets</h3>
                </div>  
            </div>
            
            <div className='heroimg'>
                <img src="assets/Group2-3.svg" alt="img3" />

                <div className='hero-sec-3'>
                    <h3>Request Payments</h3>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Hero