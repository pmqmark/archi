import React from 'react'

function Process () {
  return (
    <section className='tc-process-style1'>
      <div className='container'>
        <div className='title mb-100 text-center'>
          <h2 className='fsz-45'> Our Process Work </h2>
        </div>
        <div className='content'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='info'>
                <div
                  className='accordion wow fadeInUp slow'
                  id='accordionProcess'
                >
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                      >
                        <span className='num'> 1 / </span>
                        <h3> Site Visit </h3>
                      </button>
                    </div>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
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
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                      >
                        <span className='num'> 2 / </span>
                        <h3> Design & Planning </h3>
                      </button>
                    </div>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
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
                          materials, and timelines.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFive'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                      >
                        <span className='num'> 4 / </span>
                        <h3> 3D Modelling (If Required) </h3>
                      </button>
                    </div>
                    <div
                      id='collapseFive'
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
                    <div className='accordion-header' id='headingSix'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                      >
                        <span className='num'> 5 / </span>
                        <h3> Material Confirmation</h3>
                      </button>
                    </div>
                    <div
                      id='collapseSix'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          Final selection of colors, textures, and materials for
                          every design element
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingSeven'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSeven'
                      >
                        <span className='num'> 6 / </span>
                        <h3> Final Site Check</h3>
                      </button>
                    </div>
                    <div
                      id='collapseSeven'
                      className='accordion-collapse collapse'
                      data-bs-parent='#accordionProcess'
                    >
                      <div className='accordion-body'>
                        <div className='text'>
                          A comprehensive review before handover, including:
                          <br />
                          ○ Valuation Check: Ensuring everything is within the
                          agreed scope. <br /> ○ Client Review & Feedback Visit:
                          Final feedback session for improvements or finishing
                          touches.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href='#'
                  className='butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1'
                >
                  <span>
                    Our Projects
                    <i className='small ms-1 ti-arrow-top-right'></i>
                  </span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-2'>
              <div className='img wow'>
                <img
                  src='/home1/assets/img/process.jpg'
                  alt=''
                  className='img-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src='/home1/assets/img/c_line2.png' alt='' className='c-line wow' />
    </section>
  )
}

export default Process
