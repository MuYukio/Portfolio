import '../styles/projectInformationModal.css'
import Image from 'next/image';

export default function ProjectInformationModal({
    isOpen,
    children,
    projectName,
    projectDescription,
    projectMainLanguage,
    projectGithubRepositoryLink
}) {
    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                {children}

                <div className='projectInformationContainer'>
                    <div className='leftModalContent'>
                        <p> <strong>Nome:</strong> {projectName}</p>
                        <p> <strong>Linguagem:</strong> {projectMainLanguage}</p>
                        <p> <strong>Descrição:</strong> {projectDescription}</p>
                    </div>

                    <div className='rightModalContent'>
                        <Image
                            src={'/images/murilo.jpeg'}
                            width={200}
                            height={200}
                            alt="Foto do dono da página"
                            style={{ borderRadius: '50%' }}
                        />

                        <a href={projectGithubRepositoryLink} target='_blank' className='githubRepositoryLink'>
                            Repositório
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
