'use client';

import Link from "next/link";
import styles from './Links.module.css';
import NavLink from "./navLink/navLink";
import { useState } from "react";


const links = [
    {
        title: 'Homepage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
]

export default function Links() {

    const [open, setOpen] = useState(false);

    //TEMPORARY//////////
    const session = true;
    const isAdmin = true;
    /////////////////////

    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {links.map(link => (
                    <NavLink title={link.title} path={link.path} key={link.path} />
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLink title="Admin" path="/admin" />}
                        <button className={styles.logout}>Logout</button>
                    </>
                )
                    : (<NavLink title="Login" path="/login" />)}
            </ul>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map(link => (<NavLink title={link.title} path={link.path} key={link.path} />))}
                </div>
            }
        </div>
    );
}