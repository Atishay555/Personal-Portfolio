
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/images/logos/company-logo-2.png',
      url: 'https://github.com/Atishay555',
      ariaLabel: 'Visit GitHub',
    },
    {
      name: 'LinkedIn',
      icon: '/images/logos/linkedin.png',
      url: 'https://www.linkedin.com/in/atishay-jain-77461930a/',
      ariaLabel: 'Visit LinkedIn',
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://x.com/Atishay70923738',
      ariaLabel: 'Visit Twitter',
    },
  ]

  return (
    <footer className='w-full bg-black border-t border-black-50 mt-10'>
      <div className='px-5 md:px-10 py-10 md:py-12'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            
            {/* Contact */}
            <div className='flex flex-col items-center md:items-start gap-4'>
              <a
                href='mailto:jatishay655@gmail.com'
                className='inline-flex items-center gap-2 px-4 py-2 text-white hover:text-white-50 transition-colors duration-300'
              >
                <span>✉️</span>
                <span className='text-sm md:text-base font-medium'>
                  jatishay655@gmail.com
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.ariaLabel}
                  title={link.name}
                  className='w-10 h-10 flex items-center justify-center rounded-lg border border-black-50 hover:border-white-50 hover:bg-black-50 transition-all duration-300'
                >
                  {link.icon.startsWith('/') ? (
                    <img
                      src={link.icon}
                      alt={link.name}
                      className='w-5 h-5 object-contain'
                    />
                  ) : (
                    <span className='text-lg'>{link.icon}</span>
                  )}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className='text-center md:text-end text-white-50 text-xs md:text-sm'>
              <p>© {currentYear} Atishay | Made with React & Three.js</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

