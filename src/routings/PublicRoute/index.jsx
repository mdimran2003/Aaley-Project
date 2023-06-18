import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const PublicRoute = ({ element }) => {
  return (
    <>
      <Header />
      <Navbar />
      {element}
      <Footer />
    </>
  );
};

export default PublicRoute;
