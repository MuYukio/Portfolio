
import '../styles/headerComponent.css'
import { Castoro_Titling } from "next/font/google"

const castoroTitlingSettings = Castoro_Titling({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Header() {

    return (
        <header>
            <h1 className={`${castoroTitlingSettings.className} title`}>Murilo <br></br> Yukio</h1>
            <p className={`${castoroTitlingSettings.className} title`}>°</p>
            <h1 className={`${castoroTitlingSettings.className} title`}>Desenvolvedor</h1>
        </header>
    );
}
