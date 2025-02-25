import React from 'react'
import '../Footer/Footer.css';
import logo from '../../assets/logo1.jpg'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 footerlogo'>
                    <img src={logo} />
                    <p className='text-light mt-4'>We provides customized recommendations, expert consultations, and seamless deliveries, ensuring holistic wellness through Ayurveda. Heal naturally, every day!</p>
                </div>
                <div className='col-lg-3'>
                    
                </div>
                <div className='col-lg-3'>
                    
                </div>
                <div className='col-lg-3'>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
