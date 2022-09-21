import React from 'react'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='sec1'>
        <div className='navbar'>
          <div className='logo'>
            <p>AR Shakir</p>
          </div>

          <div className='nav-ctrl'>
            <p>Product<img src='./assets/Vector3.svg' alt='vec3'/></p> 
            <p>Template<img src='./assets/Vector3.svg' alt='vec3'/></p> 
            <p>Blog</p>
            <p>pricing</p>
          </div>

          <div className='nav-auth'>
            <p>Sign in</p>
            <button><p>Start Free</p></button>
          </div>
        </div>

        <div className="content-flex">
        <div className='header-content'>
          <div className='header-content-x'>
            <h1>Managing business<br/> payments has never<br/> been easier</h1>

            <div className='opinion'>
              <p>End-to-end payments and financial management in a single<br/> solution. Meet the right platform to help realize.</p>
            </div>
            

            <div className='header-content-2'>
              <button><p>Get Started</p></button>
              <p>See How It Works</p>
              
            </div>

            <div className='header-content-3'>

              <div className='sec-flex'>
                <img src='../assets/Group155.svg'/>
                <p>Free Register</p>
              </div>
              
              <div className='sec-flex'>
               <img src='../assets/Group155.svg'/>
               <p>Great Service</p>
              </div>
              
            </div>
          </div>
        
          </div>
          
        <div className='illustration'>
            <img src="/assets/illustration.svg" alt="" />
        </div>
        </div>

       



    
    
    </div>
  )
}

export default LandingPage