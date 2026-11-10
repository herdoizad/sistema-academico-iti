import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container-fluid flex-grow-1 d-flex p-0">
        <div className="row flex-grow-1 g-0 w-100">
          <div className="col-md-3 col-lg-2">
            <Sidebar />
          </div>

          <div className="col-md-9 col-lg-10 d-flex">
            <Main>{children}</Main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
