import React from 'react'

function About () {
  return (
    <section className='tc-about-style7'>
      <div className='container'>
        <div className='row gx-0 justify-content-between'>
          <div className='col-lg-3'>
            <div className='rotate-box' data-speed='1' data-lag='0.4'>
              <a
                href='#'
                className='rotate-circle fsz-30 rotate-text d-inline-block text-uppercase'
              >
                <svg className='textcircle' viewBox='0 0 500 500'>
                  <defs>
                    <path
                      id='textcircle'
                      d='M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z'
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref='#textcircle' textLength='900'>
                      Landscape design - Happy Homes Studio -
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src='/innerpages/assets/img/leafs.png'
                alt=''
                className='icon'
              />
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='info wow fadeInUp slow' data-wow-delay='0.2s'>
              <div className='text fsz-25 fw-500 mb-20'>
                Happy Homes is a custom interior design brand powered by Right
                Angle Interiors, a trusted name in the furniture and interior
                manufacturing industry since 2015. With over a decade of
                expertise, we’ve successfully completed 1000+ projects across
                the southern regions of India, blending diverse cultural styles
                with personalized design approaches.
              </div>
              <div className='text fsz-25 fw-500 mb-20'>
                What makes us stand out is our commitment to tech-enabled,
                precision-driven work. Backed by state-of-the-art production
                units and modern machinery, every piece of furniture is
                custom-crafted to meet client preferences and spatial needs. Our
                strong associations with reputed industrial firms further
                reinforce our quality and reliability. At Happy Homes, we don’t
                just design spaces — we transform them into personalized living
                experiences.
              </div>
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='numbers mt-5 mt-lg-0'>
              <div
                className='number-card wow zoomIn slow'
                data-wow-delay='0.4s'
              >
                <h2 className='numb'> 95% </h2>
                <small> Clients Satisfied and repeating </small>
              </div>
              <div
                className='number-card wow zoomIn slow'
                data-wow-delay='0.6s'
              >
                <h2 className='numb'> 125% </h2>
                <small> projects done </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
