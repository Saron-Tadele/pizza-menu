import React from 'react';
import profileImg from '../image/profile.jpg'
import SkillList from './SkillList';

function Card() {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 text-left mb-12" >
      <div
        className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={profileImg}
       alt="profile
            " />
        </a>
        <div className="p-6">
          <h2
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            SARON TADELE
          </h2>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
           I am Full-stack web developer with 5 years of experience in building and maintaining high-quality websites and web applications. Proven ability to work independently and as part of a team to deliver projects on time and within budget. Expertise in front-end and back-end development, including  MERN stack skill.
          </p>
     </div>
       <div className='flex gap-1 ml-4 mb-3' >
          <SkillList skillName={'Javascript'} emoji='💪' color='orange'/>
          <SkillList skillName={'Nodejs'} emoji='💪' color='sky-blue' /> 
           </div>
        <div className='flex gap-1 ml-4 mb-4 '>
           <SkillList skillName={'React'} emoji='💪' color='pink'/> 
           <SkillList skillName={'HTML AND CSS'} emoji='💪' color='yellow'/> 
        </div>
         </div>
     
    </div>
  );
}

export default Card;