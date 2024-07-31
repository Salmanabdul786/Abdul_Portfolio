import styles from './AboutStyles.module.css'

const About = () => {
  return (
<section id='hero' className={styles.container}>

<div className={styles.info}>
<h1 className='sectionTitle'>
    About me
</h1>


<p className={styles.description}>Hello! My name is [Your Name], and I am a [Your Profession/Role] based in [Your Location]. With a passion for [Your Passion/Field], I have [number] years of experience in [related field/industry]. I specialize in [specific skills or expertise], and I enjoy [hobbies or interests]. When I'm not working, you can find me [activities or hobbies]. I am dedicated to [your values or goals], and I look forward to [future aspirations or projects]. Let's connect and explore new opportunities together!</p>
   
</div>
</section>
  )
}

export default About
