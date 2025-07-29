import React from 'react'

function Process () {
  return (
    <section className='tc-process-style2'>
      <div className='container'>
        <h2 className='fsz-45 fw-500 mb-80 text-center'>
          Our Approach
          <span className='sub-font fst-italic color-orange1 fw-400'>
            process
          </span>
        </h2>
        <div className='content'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='accordion-side wow fadeInUp slow'>
                <div className='accordion' id='accordionProcess'>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                      >
                        <span className='num'> 1 / </span> <h3> Site Visit </h3>
                      </button>
                    </div>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          Our team visits your space to understand layout,
                          requirements, and measurements.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button '
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                      >
                        <span className='num'> 2 / </span>{' '}
                        <h3> Design & Planning </h3>
                      </button>
                    </div>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse show'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          Based on your vision, we create design plans tailored
                          to your lifestyle and budget.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                      >
                        <span className='num'> 3 / </span>{' '}
                        <h3> Quotation Submission </h3>
                      </button>
                    </div>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          A transparent quote with clear breakdowns of services,
                          materials, and timelines
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                      >
                        <span className='num'> 4 / </span>{' '}
                        <h3> 3D Modelling (If Required) </h3>
                      </button>
                    </div>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          Get a visual preview of your space through detailed 3D
                          renderings before execution.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFour1'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour1'
                      >
                        <span className='num'> 5 / </span>{' '}
                        <h3> Material Confirmation </h3>
                      </button>
                    </div>
                    <div
                      id='collapseFour1'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          Final selection of colors, textures, and materials for
                          every design element.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFour2'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour2'
                      >
                        <span className='num'> 6 / </span>{' '}
                        <h3> Final Site Check </h3>
                      </button>
                    </div>
                    <div
                      id='collapseFour2'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          A comprehensive review before handover, including: 
                          ○ Valuation Check: Ensuring everything is within the
                          agreed scope.  <br />
                          ○ Client Review & Feedback Visit: Final
                          feedback session for improvements or finishing
                          touches.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href='#'
                  className='butn bg-white rounded-pill mt-50 hover-bg-black'
                >
                  <span>
                    Get A Free Quotes
                    <i className='ms-2 fal fa-long-arrow-right ico-45'></i>
                  </span>
                </a>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='imgs'>
                <div className='img' data-lag='0.2'>
                  <img
                    src='/innerpages/assets/img/process/proc1.jpg'
                    alt=''
                    className='img-cover'
                  />
                  <span className='txt sub-font'> Design & Planning </span>
                </div>
                <div className='img' data-lag='0.4'>
                  <img
                    src='/innerpages/assets/img/process/proc2.jpg'
                    alt=''
                    className='img-cover'
                  />
                  <span className='txt sub-font'> Handover </span>
                </div>
                <div className='img' data-lag='0.3'>
                  <img
                    src='/innerpages/assets/img/process/proc3.jpg'
                    alt=''
                    className='img-cover'
                  />
                  <span className='txt sub-font'> Site Visit </span>
                </div>
                <div className='img' data-lag='0.5'>
                  <img
                    src='/innerpages/assets/img/process/proc4.jpg'
                    alt=''
                    className='img-cover'
                  />
                  <span className='txt sub-font'> Implement </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src='/innerpages/assets/img/prc_bg.png'
        alt=''
        className='bg'
        data-speed='1.2'
      />
    </section>
  )
}

export default Process
