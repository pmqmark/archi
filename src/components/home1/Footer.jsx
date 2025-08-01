import React from 'react'

function Footer () {
  return (
    <footer className='tc-footer-style1'>
      <div className='container'>
        <div className='top-content section-padding'>
          <div className='row gx-0'>
            <div className='col-lg-4'>
              <div className='info-side'>
                <div className='text fsz-24 color-333 lh-3 fw-600'>
                  At Happy Homes, we believe interior design has the power to
                  shape lifestyles and transform everyday living. Our philosophy
                  blends passion for innovation, sustainable practices, and
                  timeless, custom-crafted aesthetics.
                </div>
                <div className='foot-social mt-50'>
                  <a href='#'>
                    <i className='fab fa-x-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 offset-lg-2'>
              <div className='branch-card'>
                <h5 className='mb-20 mt-5 mt-lg-0 fw-600'>
                  {' '}
                  Erumalappady, Kothamangalam
                </h5>
                <ul className='footer-links'>
                  <li>
                    {/* <a href='#'>Room 505, 49 Brimmer st, Boston, MA 02108</a> */}
                  </li>
                  <li>
                    <a href='#'> contact@happyhomes.com </a>
                  </li>
                  <li>
                    <a href='#'> +91 79074 61755</a>
                  </li>
                  <li>
                    <a href='#'> +91 79023 39754</a>
                  </li>
                  <li>
                    <a href='#'> +91 92071 35820</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='foot'>
          <div className='row'>
            <div className='col-lg-6'>
              <p className='fsz-13'>
                © {new Date().getFullYear()} Happy Homes. All Right Reserved
              </p>
            </div>
            <div className='col-lg-6'>
              <div className='foot-links mt-4 mt-lg-0'>
                <a href='/'> Home </a>
                <a href='#'> Studio </a>
                <a href='#'> Cases </a>
                <a href='#'> News </a>
                <a href='#'> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
