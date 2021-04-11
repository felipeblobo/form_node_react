import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer>
      <p className='footerItem footerMargin'>Alguns direitos reservados.</p>
      <div className='footerItem footerMargin'>
        <a target='_blank' href='https://github.com/felipeblobo' alt='github'><FontAwesomeIcon className = 'icone' icon={faGithub} size="2x" style={{color: '#588e55'}} /></a>
        <a target='_blank' href='https://www.linkedin.com/in/felipelobo23/' alt='linkedin'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#588e55'}} /></a>
      </div>
      <p className='footerItem '>Salvador, Bahia.</p>
    </footer>
  );
}

export default Footer;
