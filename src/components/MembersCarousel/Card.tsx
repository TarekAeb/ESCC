import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface CardProps {
    name: string;
    department: string;
    github: string;
    linkedIn: string;
    gmail: string;
    photo: string;
}

const Card: React.FC<CardProps> = ({ name, department, github, linkedIn, gmail, photo }) => {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <h3>{department}</h3>
            <a href={`mailto:${gmail}`}><FaEnvelope /></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    );
}

export default Card;
