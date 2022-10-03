import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedin />, href:"https://www.linkedin.com/in/niceu-santos-biriba-1055301b2/"},
  {name: "github", icon: <FaGithub />},
  {name: "instagram", icon: <FaInstagram />},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a target="_blank" href={network.href}className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
};

export default SocialNetworks
