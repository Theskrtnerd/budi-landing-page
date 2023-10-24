import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full mx-auto' style={{ height: '580px' }}>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-rwo items-start gap-5`}>
        <div>
        <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            We give you 
          </p>
          <h1 className={`${styles.heroHeadText} text-black`}>Free <span className='text-pri-100'>Shipping</span></h1>
          <h1 className={`${styles.heroHeadText} text-black`}>Exclusive <span className='text-pri-100'>Discounts</span></h1>
          <h1 className={`${styles.heroHeadText} text-black`}>Save <span className='text-pri-100'>Trees</span></h1>
        </div>        
      </div>
      
      {/* <div className="absolute w-full sm:w-[70%] h-screen sm:right-[1%]">
        <ComputersCanvas />
      </div> */}
      
      
      
    </section>
  )
}

export default Hero