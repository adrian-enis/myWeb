import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-negro-espacial h-[10%] top-0 absolute w-full flex justify-center items-center m-auto ">
      <article className=" w-[100%] md:w-[90%] flex flex-wrap md:flex-nowrap justify-between items-center">
        <h5 className="text-plateado-nebulosa font-bold text-6xl">Bienvenidos</h5>
        <button
          onClick={toggleMenu}
          className={`hamburger hamburger--collapse bg-white md:hidden ${isOpen ? "is-active" : ""}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className="w-full relative">
          <ul className={` flex flex-col items-center justify-evenly text-3xl
                           sm:flex-col h-[30vh] w-full bg-slate-200 absolute
                          ${isOpen ? "block" : "hidden"} md:flex md:flex-row
                           md:h-0 md:text-white`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Proyects</a></li>
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default Navbar;
