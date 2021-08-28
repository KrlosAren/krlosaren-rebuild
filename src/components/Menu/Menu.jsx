import Link from 'next/link';
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
              <img
                src='https://img.icons8.com/material-outlined/192/16213e/github.png'
                alt='github'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/carloslopezzavarce/'
              target='_blank'
              rel='noreferrer'>
              <img
                src='https://img.icons8.com/ios-glyphs/120/16213e/linkedin-2.png'
                alt='linkedin'
              />
            </a>
            <a
              href='https://twitter.com/krlosaren'
              target='_blank'
              rel='noreferrer'>
              <img
                src='https://img.icons8.com/material/144/16213e/twitter-squared.png'
                alt='twitter'
              />
            </a>
            <a
              href='https://www.instagram.com/krlosaren/'
              target='_blank'
              rel='noreferrer'>
              <img
                src='https://img.icons8.com/ios/250/16213e/instagram-new.png'
                alt='instagram'
              />
            </a>
            <a
              href='mailto:krlosaren@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <img
                src='https://img.icons8.com/ios/50/000000/mail.png'
                alt='mail'
              />
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
