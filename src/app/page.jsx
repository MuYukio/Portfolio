'use client';

import '../../styles/homePage.css'
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navbar />
      <main>
        <section>
          <p>
            bla bla bla eu sou o murilo nao <br />
            sei o que <br />
            quero trabalhar <br />
            coisas assim <br />
            :D <br />
            CONTRATA EU
          </p>

          <Image
            src={'/images/murilo.jpeg'}
            width={350}
            height={350}
            alt="Foto do dono da página"
            style={{ borderRadius: '50%' }}
            priority
          />
        </section>
      </main>
    </div>
  );
}
