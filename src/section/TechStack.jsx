import React from 'react'
import TitleHeader from '../component/TitleHeader.jsx'
import { logoIconsList } from '../constant'

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>

      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader  title='TECH STACK'/>

        <div className='md:my-20 my-10 relative'>
          <div className='gradient-edge'/>
          <div className='gradient-edge'/>
           <div className='marquee h-52'>
          <div className="marquee-box md:gap-12 gap-5">
  {logoIconsList.map((icon) => (
    <LogoIcon key={icon.name} icon={icon} />
  ))}
  {logoIconsList.map((icon) => (
    <LogoIcon key={icon.name} icon={icon} />
  ))}
</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TechStack