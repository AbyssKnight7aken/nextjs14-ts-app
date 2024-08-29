'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

type navLinkProps = {
    title: string;
    path: string;
};

export default function NavLink({ title, path }: navLinkProps) {

    const pathName = usePathname();
    return (
        <li className={`${styles.container} ${pathName === path && styles.active}`} key={title}><Link href={path}>{title}</Link></li>
    );
}