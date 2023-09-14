import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { color, motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement 
    contentStyle = { { background: '#F8F8FF', color: '#F6467E' } }
    style={{color: 'black'}}
    contentArrowStyle = { { borderRight: '7px solid #F8F8FF'} }
    date = { experience.date }
    iconStyle = { { background: experience.iconBg, color: 'black' } }
    icon = {
      <div className = 'flex justify-center items-center w-full h-full'>
        <img
          src = { experience.icon }
          alt = { experience.company_name } 
          className = 'w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className = 'text-black text-[24px] font-bold'>{ experience.title }</h3>
      <p className = 'text-tertiary text-[16px] font-semibold' style = { { margin: 0 } }> { experience.company_name } </p>
    </div>
    <ul className = 'mt-5 list-disc ml-5 space-y-2'>
      { experience.points.map((point, index) => (
        <li
          key = { `experience-point-${index}` }
          className = 'text-black-100 text-[14-px] pl-1 tracking-winder'
        >
          { point }
        </li>
      )) }
    </ul>
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants = { textVariant() }>
        <p className = { styles.sectionSubText } >
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className = { styles.sectionHeadText }>
          Work Experience
        </h2>
      </motion.div>
      <div>
        <VerticalTimeline
          lineColor = { '#F6467E' }
        >
          { experiences.map ((experience, index) => (
            <ExperienceCard className='vertical-timeline-element-icon ' key = { index } experience = { experience } />
          )) }

        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")