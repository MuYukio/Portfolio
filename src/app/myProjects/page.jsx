
import '../../../styles/myProjectsPage.css'
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ProjectArea from '@/components/ProjectArea';

export default function Page() {

    return (
        <div className='mainContainer'>
            <Header />

            <Navbar />
            <main>
                <section>
                    <ProjectArea
                        projectName={'Projeto X'}
                        projectDescription={'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Eche homo Lorem ipsum dolor'}
                        projectMainLanguage={'Javascript'}
                        projectGithubRepositoryLink={'https://github.com/MuYukio/Portfolio'}
                    />

                    <ProjectArea
                        projectName={'Projeto X'}
                        projectDescription={'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Eche homo Lorem ipsum dolor'}
                        projectMainLanguage={'Javascript'}
                        projectGithubRepositoryLink={'https://github.com/MuYukio/Portfolio'}
                    />

                    <ProjectArea
                        projectName={'Projeto X'}
                        projectDescription={'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Eche homo Lorem ipsum dolor'}
                        projectMainLanguage={'Javascript'}
                        projectGithubRepositoryLink={'https://github.com/MuYukio/Portfolio'}
                    />

                    <ProjectArea
                        projectName={'Projeto X'}
                        projectDescription={'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Eche homo Lorem ipsum dolor'}
                        projectMainLanguage={'Javascript'}
                        projectGithubRepositoryLink={'https://github.com/MuYukio/Portfolio'}
                    />

                    <ProjectArea
                        projectName={'Projeto X'}
                        projectDescription={'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Eche homo Lorem ipsum dolor'}
                        projectMainLanguage={'Javascript'}
                        projectGithubRepositoryLink={'https://github.com/MuYukio/Portfolio'}
                    />
                </section>
            </main>
        </div>
    );
}
