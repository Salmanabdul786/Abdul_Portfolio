import styles from './IntroStyles.module.css';
import heroimg from '../../assets/hero-img.png';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
//import logo from '../../assets/—Pngtree—ak letter logo png image_6628283.png'




const Intro = () => {
    const {theme ,toggleTheme}=useTheme();

    const themeIcon= theme ==='light' ? sun :moon;
    const twittericon = theme === 'light' ? twitterLight : twitterDark;
    const github = theme === 'light' ? githubLight : githubDark;
    const LinkedIn = theme === 'light' ? linkedinLight : linkedinDark;
  return (
  
    <section id='hero' className={styles.container}>

        <div className={styles.colorModeContainer}>
            <img
                className={styles.intro}
                src={heroimg}
                alt='Profile pic'
            />
              <img
                className={styles.colorMode}
                src={themeIcon}
                alt='themeicon'
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
        <h1>
            Abdul
            <br/>
            Kareem
        </h1>
        <h2>FullStack Developer</h2>
        <span>
            <a href='#' target='_blank'>
                <img
                    src={twittericon} alt='twitter icon'
                />
            </a>
            <a href='#' target='_blank'>
                <img
                    src={LinkedIn} alt='twitter icon'
                />
            </a>
            <a href='#' target='_blank'>
                <img
                    src={github} alt='twitter icon'
                />
            </a>
        </span>

        <p className={styles.description}>With a passion for developing modern React web
         apps for commercial businesses.</p>
            <a href={CV} download>
                <button className='hover' >
                Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Intro