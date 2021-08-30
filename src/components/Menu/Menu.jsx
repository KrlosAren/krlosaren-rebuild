import Link from 'next/link';
import GithubIcon from '../../assets/icons/Github/GithubIcon';
import InstagramIcon from '../../assets/icons/Instagram/InstagramIcon';
import LinkedIn from '../../assets/icons/LinkedIn/LinkedIn';
import MailIcon from '../../assets/icons/Mail/MailIcon';
import TwitterIcon from '../../assets/icons/Twitter/Twitter';
import menu from '../../utils/menu';

const Menu = () => {
  return (
    <div className='nav__container hiddenMenu' id='menu'>
      <div className='nav'>
        <div className='nav__rrss'>
          <div className='nav__rrss--line'>
            <a
              href='https://github.com/KrlosAren'
              target='_blank'
              rel='noreferrer'>
              <GithubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/carloslopezzavarce/'
              target='_blank'
              rel='noreferrer'>
              <LinkedIn />
            </a>
            <a
              href='https://twitter.com/krlosaren'
              target='_blank'
              rel='noreferrer'>
              <TwitterIcon />
            </a>
            <a
              href='https://www.instagram.com/krlosaren/'
              target='_blank'
              rel='noreferrer'>
              <InstagramIcon />
            </a>
            <a
              href='mailto:krlosaren@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <MailIcon />
            </a>
          </div>
        </div>
        <div className='nav__links'>
          <div className='nav__links--item'>
            <Link href='/'>
              <a onClick={menu}>Home</a>
            </Link>
            <span>Regreso al Home Page</span>
          </div>
          <div className='nav__links--item'>
            <Link href='/projects'>
              <a onClick={menu}>Projects</a>
            </Link>
            <span>Algunos proyectos</span>
          </div>
          <div className='nav__links--item'>
            <Link href='/about'>
              <a onClick={menu}>Yo</a>
            </Link>
            <span>Acerca de mi</span>
          </div>
          <div className='nav__links--item'>
            <Link href='/makesimple'>
              <a onClick={menu}>Make It Simple</a>
            </Link>
            <span>Para aprender</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
