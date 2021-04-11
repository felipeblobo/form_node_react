import ReactDOM from 'react-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer>
      <div>Alguns direitos reservados.</div>
      <div>
        <a target='_blank' href='https://github.com/felipeblobo' alt='github'><FontAwesomeIcon className = 'icone' icon={faGithub} size="2x" style={{color: '#588e55'}} /></a>
        <a target='_blank' href='https://www.linkedin.com/in/felipelobo23/' alt='linkedin'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#588e55'}} /></a>
      </div>
      <div>Salvador, Bahia.</div>
    </footer>
  );
}

export default Footer;
