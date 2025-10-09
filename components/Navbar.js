
import '../styles/navbarComponent.css'
import Link from "next/link";

export default function Navbar(){

    return(
        <nav>
            <ul className='itemsContainer'>
                <li >
                    <a href='/'>Resumos</a>
                </li>

                <li>
                    <a href='/meusProjetos'>Meus projetos</a>
                </li>

                <li>
                    <a href='/links'>Links</a>
                </li>
            </ul>
        </nav>
);
}
