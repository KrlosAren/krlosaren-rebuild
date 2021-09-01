import { useContext } from 'react';
import { UIContext } from '../../context/UIContext';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  const { uiState } = useContext(UIContext);

  return (
    <>
      <Navbar />
      <Menu isVisible={uiState} />
      {!uiState && children}
      <Footer isVisible={uiState} />
    </>
  );
};

export default Layout;
