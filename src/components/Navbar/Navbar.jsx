import router from 'next/router';
import menu from '../../utils/menu';

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className='nav__header' id='navigator'>
      <span>
        <div onClick={handleClick}>
          <img
            src='https://storage.googleapis.com/krlosaren-portafolio/images/icon_page.svg'
            alt='home'
          />
        </div>
      </span>
      <span>
        <button id='buttonMenu' type='button' onClick={menu}>
          Menu
        </button>
      </span>
    </div>
  );
};

export default Navbar;
