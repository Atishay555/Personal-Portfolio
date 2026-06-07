import React, { useState } from 'react'
import TitleHeader from '../component/TitleHeader'
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_25brl7c",
      "template_s110z2s",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "2yuIlsO42thDlX_3t"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Thank you for your message! I will get back to you soon.");
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id='contact' className='flex-center section-padding mt-30'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title='CONTACT ME'

        />

        <div className='mt-16 grid-2-cols gap-12 lg:gap-20'>
          
          {/* LEFT SECTION - CONTACT FORM */}
          <div className='flex flex-col justify-center'>
            {/*  */}

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div className='form-group'>
                <label htmlFor='name' className='block text-white-50 mb-3 font-semibold'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Enter your full name'
                  required
                  className='w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-white-50 transition-all duration-300'
                />
              </div>

              {/* Email Field */}
              <div className='form-group'>
                <label htmlFor='email' className='block text-white-50 mb-3 font-semibold'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email address'
                  required
                  className='w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-white-50 transition-all duration-300'
                />
              </div>

              {/* Message Field */}
              <div className='form-group'>
                <label htmlFor='message' className='block text-white-50 mb-3 font-semibold'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Write your message here...'
                  rows='5'
                  required
                  className='w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-white-50 transition-all duration-300 resize-none'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-white-50 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT SECTION - 3D MODEL */}
          <div className='flex flex-col justify-center items-center h-96 md:h-[500px] relative'>
            <div className='w-full h-full rounded-xl overflow-hidden border border-black-50 bg-[#fde300]'>
              <img src="/images/Atishay.png" alt="Atishay "  className="relative  w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact