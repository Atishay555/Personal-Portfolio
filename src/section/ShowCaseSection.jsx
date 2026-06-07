import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger) ; 

const ShowCaseSection = () => {
  const sectionRef = useRef(null) ; 
  const Project1 = useRef(null) ; 
  const Project2 = useRef(null) ; 
  const Project3 = useRef(null) ; 

    

  useGSAP(() => {
  const projects = [
    Project1.current,
    Project2.current,
    Project3.current,
  ];

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
        },
      }
    );
  });

  gsap.fromTo(
    sectionRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
    }
  );
}, []);



  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left Section/ Main Project */}
          <div className='first-project-wrapper' ref={Project1}>
            <div className='image-wrapper'>
              <img src="/images/ArenaX.jpeg" alt="ArenaX" />
            </div>
            <div className='text-content'>
              <h2>ArenaX – Sports Management & Booking Platform</h2>
              <p className='text-white-50 md:text-xl'>ArenaX is a comprehensive sports ecosystem designed to simplify and digitize sports management, tournament organization, turf booking, and athlete development.</p>
            </div>
          </div>

          {/*Right Section/Seccondary Projects */}

          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={Project2}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src="/images/gemini-clone.jpeg" alt="Drive" />
              </div>
              <h2>Jarvis(Ai Assistant platform)</h2>
            </div>
            <div className='project' ref={Project3}>
              <div className='image-wrapper bg-[#f5f4f4]'>
                <img src="/images/project2.png" alt="Ai Assistant" />
              </div>
              <h2>Library Managment System</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShowCaseSection