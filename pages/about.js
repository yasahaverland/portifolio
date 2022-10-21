import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p className={styles.extraGreen}> I am Yasmin, I am a Software wizzard!</p>
            <Image 
                src='/Belle.jpg'
                alt='belle art'
                width={400}
                height={500}
            />
        </div>
    )
}