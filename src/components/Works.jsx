import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants = { fadeIn("up", "spring", index * 0.5, 0.75) }>
      <Tilt
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className = "bg-secondary p-5 sm:w-[360px] w-full"
      >
        <div className = 'relative w-full h-[230px]'>
          <img
            src = { image }
            alt = { name }
            className = 'w-full h-full object-cover'
          />

          <div className = 'absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick = {() => window.open(source_code_link, "_blank")} className='white-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer'>
              <img 
                src = { github }
                alt = 'github'
                className = 'w-7 h-7 object contain'
              />
            </div>
          </div>
        </div>

        <div className = 'mt-5'>
          <h3 className = 'text-black font-bold text-[24px]'>{ name }</h3>
          <p className = 'mt-2 text-black text-[14px]'>{ description }</p>
        </div>

        <div className = 'mt-4 flex flex-wrap gap-2'>
          { tags.map((tag) => (
            <span key = { tag.name } className = { `bg-tertiary text-white text-[14px] mr-2 px-2.5 py-0.5` }> { tag.name } </span>
          )) }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants = { textVariant() }>
        <p className = { styles.sectionSubText }> 
          MY WORK
        </p>
        <h2 className = { styles.sectionHeadText }>
          Projects
        </h2>
      </motion.div>

      <div className = 'w-full flex'>
        <motion.p variants = { fadeIn("", "", 0.1, 1) } className = 'mt-3 text-black text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience with different lenguages through real-world examples my work. Each project is briefy described with images and links to code repositories. It reflects my ability to work with various technologies, manage projects efficiently and so to create quality software solutions.
        </motion.p>
      </div>
      <div className = 'mt-20 flex flex-wrap gap-7'>
        { projects.map((project, index) => (
          <ProjectCard 
            key = { `project-${ index }` }
            index = { index }
            { ...project }
          />
        )) }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");