import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBa() {
    return (
        <nav>
            <Link className={styles.margin} href='/'>Home</Link>
            <Link href='/about'>About Me</Link>
        </nav>
    )
}