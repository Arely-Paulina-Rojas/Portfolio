import { styles } from '../styles';
import Typed from 'react-typed';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={ `${styles.paddingX} absolute inset-0 top-[47%] max-w-7x1 mx-auto items-start gap-5`}>
        <div className='grid grid-cols-6'>
          <div class="col-start-1 col-end-5">
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
              I develop user interfaces, mobile and web applications 
            </p>
          </div>
          <div className='md:block hidden col-start-5 col-end-6'>
          <h1 className={`${styles.heroHeadText} text-black`}>Hi,</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero