import React from 'react'
import '../Benifits/Benifits.css'
import leafImg from '../../assets/leaf.png'
import benifitImg from '../../assets/benifitImg.jpg'
import descriptionImg from '../../assets/description.jpg'

const Benifits = () => {
    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-12 text-center benifitTitle'>
                        <h1>Benefits of Ayurvedic Medicine</h1>
                    </div>

                    <div class="container benefits-container mt-5">
                        {/* Left Side Benefits  */}
                        <div class="benefits w-100">
                            <p> <h4><strong>Natural & Holistic Healing</strong></h4> <p>Treats the root cause, not just symptoms.</p> <img src={leafImg} alt="" /></p>
                            <p> <h4><strong>Boosts Immunity</strong></h4>  <p>Strengthens with Guduchi & Ashwagandha.</p> <img src={leafImg} alt="" /></p>
                            <p> <h4><strong>Reduces Stress & Anxiety</strong></h4>  Calms with Brahmi & Jatamansi. <img src={leafImg} alt="" /></p>
                            <p> <h4><strong>Enhances Skin & Hair</strong></h4>  Glow with Aloe Vera & Bhringraj. <img src={leafImg} alt="" /></p>
                            <p> <h4><strong>No Harmful Chemicals</strong></h4>  Made from pure, plant-based ingredients. <img src={leafImg} alt="" /></p>
                        </div>

                        {/* Center Card  */}
                        <div class="center-card benifitImage-container">
                            <img src={benifitImg} />
                        </div>

                        {/* Right Side Benefits  */}
                        <div class="benefits w-100">
                            <p><img src={leafImg} alt="" /> <h4><strong>Balances Body & Mind</strong></h4>  Restores harmony through Dosha balancing.</p>
                            <p><img src={leafImg} alt="" /> <h4><strong>Improves Digestion</strong></h4>  Aids gut health with Triphala, Ajwain, Hing.</p>
                            <p><img src={leafImg} alt="" /> <h4><strong>Supports Detoxification</strong></h4>  Removes toxins with Neem & Manjistha.</p>
                            <p><img src={leafImg} alt="" /> <h4><strong>Manages Lifestyle Disorders</strong></h4>  Helps with diabetes, thyroid, joint pain naturally.</p>
                            <p><img src={leafImg} alt="" /> <h4><strong>Sustainable & Time-Tested</strong></h4>  A 5,000-year-old science.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <img src={descriptionImg} className='w-100'/>
            </div>
        </div>
    )
}

export default Benifits
