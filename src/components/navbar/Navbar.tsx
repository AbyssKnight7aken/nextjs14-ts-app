import Link from "next/link";
import Links from "./links/Links";

import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.container}>
            <p className={styles.logo}><Link href='/'>Logo</Link></p>
            <nav>
                <Links />
            </nav>
        </header>
    );
}