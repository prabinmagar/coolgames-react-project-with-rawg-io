import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from "../components/common/index";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
