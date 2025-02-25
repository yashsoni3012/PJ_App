import React from 'react'
import '../Cards/Cards.css'
import icon1 from '../../assets/Updated Icons/1.png'
import icon2 from '../../assets/Updated Icons/2.png'
import icon3 from '../../assets/Updated Icons/3.png'
import icon4 from '../../assets/Updated Icons/4.png'


const Cards = () => {
    return (
        <div>
            <div className='container'>
                <div className='row mt-5 w-100'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className="card" style={{ width:"100%", border: "none" }}>
                            <img src={icon1} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h3 className="card-title">Diabetes</h3>
                                <p className="card-text">Balance your blood sugar naturally with our Ayurvedic diabetes medicine. Crafted with herbs like Jamun, Karela, and Guduchi, it supports glucose control, boosts metabolism, and promotes overall well-being.</p>
                                <a href="#" className="btn btn-success">Health Checkup</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className="card" style={{width:"100%",  border: "none" }}>
                            <img src={icon2} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h3 className="card-title">Thyroid</h3>
                                <p className="card-text">Support thyroid health naturally with our Ayurvedic medicine, enriched with Ashwagandha, Guggulu, and Triphala. It helps balance hormones, boost metabolism, and improve energy levels for overall well-being.</p>
                                <a href="#" className="btn btn-success">Health Checkup</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className="card" style={{width:"100%",  border: "none" }}>
                            <img src={icon3} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h3 className="card-title">Constipation & Gas</h3>
                                <p className="card-text">Relieve constipation and gas naturally with our Ayurvedic medicine. Powered by Triphala, Ajwain, and Hing, it supports digestion, regulates bowel movements, and soothes bloating for a lighter, healthier gut.</p>
                                <a href="#" className="btn btn-success">Health Checkup</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>  
                        <div className="card" style={{width:"100%", border: "none" }}>
                            <img src={icon4} className="card-img-top rounded-circle w-50 mx-auto" alt="..." />
                            <div className="card-body text-center">
                                <h3 className="card-title">Joint Pain</h3>
                                <p className="card-text">Soothe joint pain naturally with our Ayurvedic medicine, enriched with Shallaki, Guggulu, and Ashwagandha. It supports mobility, reduces inflammation, and strengthens joints for lasting relief and flexibility.</p>
                                <a href="#" className="btn btn-success">Health Checkup</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="green-line"></div>

        </div>
    )
}

export default Cards
