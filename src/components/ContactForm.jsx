import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { useAlertContext } from '../context/AlerctContext';


 const SignupSchema = Yup.object().shape({
    message: Yup.string()
     .min(2, 'Your message is too short!')
     .max(140, 'Too Long!')
     .required('This field is required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('This field is required!'),
 })

function ContactForm() {
  const { isOpen, onOpen } = useAlertContext()

  return (
    <Formik
      initialValues={{
         message: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values) => {
          onOpen('Success', `Thank you for messaging me, I will reply as soon as possible\n ${values.email}`)
        console.log(isOpen);
       }}>

      <Form className='flex flex-col gap-6'>
          <div 
            className='flex flex-col gap-2'>
            <label 
              htmlFor="">
                Email
              </label> 
            <Field 
              placeholder='E-mail' 
              className='p-4 border border-slate-300 rounded-lg text-slate-300 bg-fuchsia-950/60' 
              name="email" />
              <div className='text-right text-sm text-red-700' >
                <ErrorMessage name="email" />
              </div>
          </div>
          <div 
            className='flex flex-col gap-2'>
            <label htmlFor="">Message</label> 
            <Field as="textarea" placeholder='White down your message' className='p-4 border border-slate-300 rounded-lg text-slate-300 bg-fuchsia-950/60' name="message" />
               <div className='text-right text-sm text-red-700' >
                <ErrorMessage name="message" />
              </div>
          </div>
          <button type="submit" className='p-4 bg-purple-800/60 rounded-lg text-white flex flex-row items-center justify-center'>Submit</button>
        </Form> 
    </Formik>
    
  )
}

export default ContactForm