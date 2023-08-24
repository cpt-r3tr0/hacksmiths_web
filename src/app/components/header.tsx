import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
    return (
    <header className={styles.header}>
        <div className="logo">
            <Image 
                src="../public/hacksmiths-logo.svg"
                width={200}
                height={200}
                alt="Hacksmiths Logo"
            />
        </div>
        <div className={styles.nav_links}>
            <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/hardware">Hardware</Link>
            <Link href="/contact">Contact</Link>
            </div>

            <div>
                <button type='button' className={[styles.button, styles.btn1].join(' ')}>Get Updates</button>
                <button type='button' className={[styles.button, styles.btn2].join(' ')}>Join For Free</button>
            </div>
        </div>
    </header>
    )
}