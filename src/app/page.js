
import '../../styles/homePage.css'
import { Castoro_Titling } from "next/font/google"

const castoroTitlingSettings = Castoro_Titling({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <div>
      <header>
        <h1 className={`${castoroTitlingSettings.className} title`}>Murilo <br></br> Yukio</h1>
        <p className={`${castoroTitlingSettings.className} title`}>°</p>
        <h1 className={`${castoroTitlingSettings.className} title`}>Desenvolvedor</h1>
      </header>

      <main>
        <h1>Bem vindos ao Portfólio do MuMu</h1>
      </main>
    </div>
  );
}
