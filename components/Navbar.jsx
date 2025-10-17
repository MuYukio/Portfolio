"use client";

import '../styles/navbarComponent.css'
import { usePathname } from "next/navigation";
import { Castoro_Titling } from "next/font/google"

const castoroTitlingSettings = Castoro_Titling({
    subsets: ['latin'],
    weight: ['400'],
    fallback: ['serif', 'Georgia'],
})

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className='navbarItemsContainer'>
                <li
                    style={{
                        borderBottom: pathname === '/' ? '2px solid #2C1997' : 'none'
                    }}
                >
                    <a href='/' className={`${castoroTitlingSettings.className}`}>RESUMO</a>
                </li>

                <li
                    style={{
                        borderBottom: pathname === '/myProjects' ? '2px solid #2C1997' : 'none'
                    }}
                >
                    <a href='/myProjects' className={`${castoroTitlingSettings.className}`}>MEUS <br></br> PROJETOS</a>
                </li>

                <li
                    style={{
                        borderBottom: pathname === '/links' ? '2px solid #2C1997' : 'none'
                    }}
                >
                    <a href='/links' className={`${castoroTitlingSettings.className}`}>LINKS</a>
                </li>
            </ul>
        </nav>
    );
}
