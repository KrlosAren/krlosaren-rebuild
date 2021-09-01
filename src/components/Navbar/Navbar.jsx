import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { UIContext } from '../../context/UIContext';

const Navbar = () => {
  const { uiState, setUiState } = useContext(UIContext);

  const handleMenuOpen = () => {
    setUiState(!uiState);
  };

  const styles = {
    backgroundColor: uiState && '#92dce5',
  };

  return (
    <div className='nav__header' id='navigator' style={styles}>
      <Link href='/'>
        <a onClick={handleMenuOpen}>
          <Image
            src='https://storage.googleapis.com/krlosaren-portafolio/images/icon_page.svg'
            alt='home'
            width={500}
            height={500}
          />
        </a>
      </Link>
      <button id='buttonMenu' onClick={handleMenuOpen}>
        Menu
      </button>
    </div>
  );
};

export default Navbar;
