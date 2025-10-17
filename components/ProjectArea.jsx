"use client"

import Image from 'next/image';
import '../styles/projectArea.css'
import { useState } from "react";
import ProjectInformationModal from './ProjectInformationModal';

export default function ProjectArea({ projectName, projectDescription, projectMainLanguage, projectGithubRepositoryLink }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='container'>
            <div className='leftContent'>
                <p> <strong>Nome:</strong> {projectName}</p>
                <p> <strong>Descrição:</strong> {projectDescription}</p>
            </div>

            <div className='rightContent'>
                <Image
                    src={'/images/murilo.jpeg'}
                    width={200}
                    height={200}
                    alt="Foto do dono da página"
                    style={{ borderRadius: '50%' }}
                />

                <button
                    className='seeMoreButton'
                    onClick={() => setIsModalOpen(true)}
                >
                    Ver Mais
                </button>

                <ProjectInformationModal
                    isOpen={isModalOpen}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    projectMainLanguage={projectMainLanguage}
                    projectGithubRepositoryLink={projectGithubRepositoryLink}
                >
                    <button
                        className="closeModalButton"
                        onClick={() => setIsModalOpen(false)}
                    >
                        X
                    </button>
                </ProjectInformationModal>
            </div>
        </div>
    );
}