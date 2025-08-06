import React from 'react'

function Map () {
  return (
    <section className='tc-map-style1'>
      <div className='map-card wow zoomIn slow' data-wow-delay='0.2s'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.59423633276!2d76.57719599816285!3d10.086911150132964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e423b0d8d091%3A0x46c21a108542c09e!2sIrumalappady%2C%20Eramalloor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1754464689055!5m2!1sen!2sin'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  )
}

export default Map
