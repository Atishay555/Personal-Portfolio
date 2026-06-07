import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com',
      ariaLabel: 'Visit GitHub',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      ariaLabel: 'Visit LinkedIn',
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://twitter.com',
      ariaLabel: 'Visit Twitter',
    },
  ]

  return (
    <footer className='w-full bg-black border-t border-black-50'>
      <div className='px-5 md:px-10 py-10 md:py-12'>
        <div className='w-full max-w-6xl mx-auto'>
          {/* Main Footer Content */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            {/* Left Section - Contact Info */}
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

            {/* Right Section - Social Links */}
            <div className='flex items-center gap-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.ariaLabel}
                  className='w-10 h-10 flex items-center justify-center rounded-lg border border-black-50 hover:border-white-50 hover:bg-black-50 transition-all duration-300'
                  title={link.name}
                >
                  <span className='text-lg'>
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Section */}
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
