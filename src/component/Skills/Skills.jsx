import styles from './SkillsStyles.module.css'
import checkMark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.list}>
            <SkillList src={checkMark} skill="HTML"/>
            <SkillList src={checkMark} skill="CSS"/>
            <SkillList src={checkMark} skill="JavaScript"/>
            <SkillList src={checkMark} skill="Typescript"/>
            <SkillList src={checkMark} skill="Node"/>
        </div>
        <hr/>
        <div className={styles.list}>
            <SkillList src={checkMark} skill="Reacr"/>
            <SkillList src={checkMark} skill="Angular"/>
            <SkillList src={checkMark} skill="Tailwind"/>
            <SkillList src={checkMark} skill="Vue"/>
        </div>
        <hr/>
        <div className={styles.list}>
            <SkillList src={checkMark} skill="Redux"/>
            <SkillList src={checkMark} skill="Webpack"/>
            <SkillList src={checkMark} skill="Git"/>
            <SkillList src={checkMark} skill="Bootstrap"/>
            <SkillList src={checkMark} skill="Jest"/>
        </div>
    </section>
  )
}

export default Skills
