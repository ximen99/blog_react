import { Outlet, Link } from "react-router-dom";
import NavTitle from "./NavTitle";
import Footer from "./Footer";

function BlogLayout() {
  return (
    <div
      className="min-w-full min-h-screen text-white text-lg relative flex-col align-middle"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/image/background.svg"
        })`,
        backgroundSize: "cover",
      }}
    >
      <header className="bg-black py-5 sticky top-0 left-0 right-0 flex justify-center">
        <nav className="flex justify-between items-center w-10/12 ">
          <Link to="./blog">
            <h1 className="text-2xl font-bold hover:cursor-pointer group">
              <i className="fa-solid fa-heart text-rose-800 group-hover:animate-ping" />{" "}
              Cheng's Blog
            </h1>
          </Link>
          <ul className="flex content-end">
            <NavTitle>
              <Link to="./blog">Blog</Link>
            </NavTitle>
            <NavTitle>
              <Link to="./cargame">Game</Link>
            </NavTitle>
            <NavTitle>
              <Link to="./About">About</Link>
            </NavTitle>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default BlogLayout;
