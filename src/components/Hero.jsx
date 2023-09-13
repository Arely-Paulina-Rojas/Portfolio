import { styles } from '../styles';
import { motion } from "framer-motion";
import Typed from 'react-typed';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={ `${styles.paddingX} absolute inset-0 top-[31%] max-w-7x1 mx-auto items-start gap-5`}>
        <div className='grid grid-cols-6'>
          <div className="col-start-1 col-end-5">
          <h1 className={`${styles.heroHeadText} text-black`}>Hi,</h1>
          <h1 className={`${styles.heroHeadText} animated-typing text-tertiary`}>
            <span className='text-black'>I'm </span>
            <Typed
              strings = { [
                "Arely Paulina",
                "Software Enginner",
                "Full Stack Developer"
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h1>
            <p className={`${styles.heroSubText} mt-2 text-black-100`}>
              I develop user interfaces, <br className='sm: block hidden'/>mobile and web applications 
            </p>
          </div>
          <div className='md:block hidden col-start-5 col-end-6'>
          <h1 className={`${styles.heroHeadText} text-black`}>Hi,</h1>
          </div>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-quinary flex justify-center items-start p-2'>
              <motion.div
                animate = {{ 
                  y: [0, 24, 0]
                }}
                transition = {{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-quinary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero