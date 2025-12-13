import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10 text-white'>
      {/*-------Left Side ----*/}
      <div className='md:w-1/2 flex flex-col justify-center gap-6'>
        <p className='text-4xl font-semibold leading-tight'>
          Book Appointment <br />With Trusted Doctors
        </p>

        <div className='flex items-center gap-4'>
          <img
            src={assets.group_profiles}
            alt='Profiles'
            className='w-32 md:w-40'
          />
          <p className='text-sm'>
            Simply browse through our extensive list of trusted doctors and
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href='#speciality'
          className='bg-white text-primary w-fit px-6 py-3 rounded-full font-medium flex items-center gap-2'
        >
          Book Appointment <img src={assets.arrow_icon} alt='' className='w-4' />
        </a>
      </div>

      {/*------Right Side----*/}
      <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <img
          src={assets.header_img}
          alt='Header Illustration'
          className='w-80 md:w-[450px]'
        />
      </div>
    </div>
  )
}

export default Header
