import React from 'react'
import TitleHeader from '../component/TitleHeader'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Backend Intern',
      company: 'Sync and Explore',
      duration: 'January 2023 - June 2023',
      description: 'Worked as a Backend Intern where I contributed to the development and maintenance of server-side applications.',
      responsibilities: [
        'Developed RESTful APIs using Node.js and Express for multiple features',
        'Implemented database schemas and optimized queries for better performance',
        'Collaborated with frontend developers to integrate backend services seamlessly',
        'Wrote unit tests and conducted code reviews to ensure code quality',
        'Debugged and resolved production issues affecting user experience',
        'Participated in agile sprint planning and daily standup meetings'
      ]
    },
    {
      id: 2,
      position: 'Junior Developer',
      company: 'Tech Solutions Ltd',
      duration: 'July 2023 - Present',
      description: 'Contributing to full-stack development projects with focus on backend optimization and scalability.',
      responsibilities: [
        'Built microservices architecture for large-scale applications',
        'Implemented authentication and authorization using JWT tokens',
        'Optimized database queries reducing response time by 40%',
        'Maintained and upgraded legacy systems to modern technology stack',
        'Mentored junior developers and conducted knowledge sharing sessions',
        'Deployed applications on AWS and Docker containers'
      ]
    }
  ]

  return (
    <section id='experience' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5 max-w-6xl'>
        <TitleHeader 
          title='Experience'
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
