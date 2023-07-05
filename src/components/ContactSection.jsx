import React from 'react'
import ContactForm from './ContactForm'
import Alert from './Alert'

function ContactSection() {
  return (
    <div id ="contactSection" className='my-16 grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold text-gray-300'>Contact me</h2>
        <p className='my-4 text-gray-400'>Be your self and neper surendee</p>
      </div>
      <div className='my-8'>
          <ContactForm/>
          <Alert/>
      </div>
    </div>
  )
}

export default ContactSection