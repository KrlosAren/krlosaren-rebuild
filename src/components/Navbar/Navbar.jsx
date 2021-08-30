import Link from 'next/link';
import menu from '../../utils/menu';

const Navbar = () => {
  return (
    <div className='nav__header' id='navigator'>
      <Link href='/'>
        <a>
          <img
            src='https://storage.googleapis.com/krlosaren-portafolio/images/icon_page.svg'
            alt='home'
          />
        </a>
      </Link>
      <span>
        <button id='buttonMenu' type='button' onClick={menu}>
          Menu
        </button>
      </span>
    </div>
  );
};

export default Navbar;
