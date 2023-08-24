import styles from './footer.module.css';

import Link from 'next/link';


export default function Footer() {
    return (
    <footer className={styles.footer}>
        <div className={styles.row}>
            <div>
                <Link href="/contact">Contact</Link>
                <Link href="/">Code of Conduct</Link>
            </div>
            <div>
                {/* social links  */}
            </div>
        </div>
        <div className={styles.row}>
            <div>
                <span>{new Date().getFullYear()}  Hacksmiths - Goldsmiths Tech Society.</span>
                <a target='_blank' rel='noopener noreferrer' href="https://www.goldsmithssu.org/">Goldsmiths SU</a>
                <a target='_blank' rel='noopener noreferrer' href="https://www.gold.ac.uk/computing/">Department of Computing at Goldsmiths</a>
            </div>
            <div>
                <Link href="mailto:team@goldsmiths.tech">team@goldsmiths.tech</Link>
            </div>
        </div>
    </footer>
    )
}
