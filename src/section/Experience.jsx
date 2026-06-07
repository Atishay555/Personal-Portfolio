import React from 'react'
import TitleHeader from '../component/TitleHeader'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Backend Intern',
      company: 'Sync and Explore',
      duration: 'December 2025 - January 2026',
      description: 'Worked as a Backend Intern where I contributed to the development and maintenance of server-side applications.',
      responsibilities: [
        'Implemented the Google Calendar Sync Feature, reducing manual scheduling effort by approximately 60%.',
        'Designed schemas and validated data using MongoDB',
        'Collaborated with frontend developers to integrate backend services seamlessly',
        'Developed JWT authentication and secure cookie-based login solutions.',
        'Debugged and resolved production issues affecting user experience',
        'Tested more than 20 APIs with Postman.'
      ]
    },
  ]

  return (
    <section id='experience' className='flex-center section-padding mt-18 '>
      <div className='w-full h-full md:px-10 px-5 max-w-6xl'>
        <TitleHeader 
          title='EXPERIENCE'
        />

        <div className='mt-16 space-y-12'>
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className='card-border rounded-xl p-8 md:p-10 hover:border-white-50 transition-all duration-300'
            >
              {/* Header */}
              <div className='mb-6'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-white'>
                      {exp.position}
                    </h3>
                    <p className='text-white-50 text-lg font-medium'>
                      {exp.company}
                    </p>
                  </div>
                  <span className='text-sm md:text-base text-white-50 font-medium bg-blue-100 px-4 py-2 rounded-lg w-fit'>
                    {exp.duration}
                  </span>
                </div>
                <p className='text-white-50 text-base leading-relaxed'>
                  {exp.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className='text-white font-semibold text-lg mb-4'>
                  Key Responsibilities:
                </h4>
                <ul className='space-y-3'>
                  {exp.responsibilities.map((responsibility, index) => (
                    <li 
                      key={index}
                      className='flex gap-4 items-start text-white-50'
                    >
                      <span className='text-white-50 font-bold text-lg mt-0.5 flex-shrink-0'>
                        •
                      </span>
                      <span className='text-base leading-relaxed'>
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
