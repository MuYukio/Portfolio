
import '../../../styles/linksPage.css'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Page() {

    return (
        <div>
            <Header />

            <main>
                <Navbar />
                <section>
                    <p>
                        <strong>GITHUB:</strong>  <a href='https://github.com/MuYukio' rel='exthernal' target='_blank'>MUYUKIO</a>
                    </p>

                    <p>
                        <strong>EMAIL DE CONTATO:</strong> muriloMaekawaDeOliveira@gmail.com
                    </p>

                    <p>
                        <strong>INSTAGRAM:</strong> <a href='https://www.instagram.com/mu_yukio?igsh=MXVnbzczZWExa2o4MA==' target='_blank'>Clique aqui</a>
                    </p>
                </section>
            </main>
        </div>
    );
}
