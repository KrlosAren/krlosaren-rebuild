import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  const icon =
    'https://storage.googleapis.com/krlosaren-portafolio/images/icon_page.svg';
  return (
    <>
      <Navbar />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
