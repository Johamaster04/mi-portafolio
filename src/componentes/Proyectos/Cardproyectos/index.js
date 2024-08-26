import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyleNav = styled.a`
    margin:20px;    
`
const StyleImg = styled.img`
    max-width: 350px;
    border-radius:20px;
`

const ProjectCard = ({ src, alt, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <StyleNav href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <StyleImg src={src} alt={alt} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
        </StyleNav>
    );
}

export default ProjectCard;
