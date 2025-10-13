
import '../../styles/homePage.css'
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Navbar />
        <h2>Tela de resumo</h2>
      </main>
    </div>
  );
}
